import { User } from '../../../domain/entities/user';
import { updateUserUseCase } from './update-user';
import UserRepository from '../../ports/UserRepository';
import PurchaseRepository from '../../ports/PurchaseRepository';
import GiveawayRepository from '../../ports/GiveawayRepository';

export type claimUserGiveawaysUseCase = (
  userId: string,
  params: { prevLogInDate: Date; currLogInDate: Date },
) => Promise<User>;

export const buildClaimUserGiveaways = (dependencies: {
  userRepo: UserRepository;
  purchaseRepo?: PurchaseRepository;
  giveawayRepo?: GiveawayRepository;
  updateUser: updateUserUseCase;
}): claimUserGiveawaysUseCase => {
  const { userRepo, giveawayRepo, updateUser, purchaseRepo } = dependencies;

  const claimUserGiveaways: claimUserGiveawaysUseCase = async (
    userId,
    params,
  ) => {
    try {
      if (!giveawayRepo || !purchaseRepo) {
        throw new Error('An error occured');
      }

      const user = await userRepo.findById(userId);

      if (!user || !user.subscriberProfile) {
        throw new Error('An Error Occured');
      }

      const giveaways = await giveawayRepo.find({
        where: [
          ['effectiveDate', '>', params.prevLogInDate],
          ['effectiveDate', '<=', params.currLogInDate],
        ],
      });

      const prevPoints = user.subscriberProfile
        ? user.subscriberProfile.points
        : 0;

      const lastGiveawayPointsForAllUser = giveaways.reduce(
        (total, giveaway) => {
          if (!giveaway.userId) {
            return total + giveaway.points;
          }
          return total;
        },
        0,
      );

      //No need to update points per user coz, in admin it automatically update the points
      //its only for showing points in toast.
      const lastGiveawayPointsPerUser = giveaways.reduce((total, giveaway) => {
        if (giveaway.userId === userId) {
          return total + giveaway.points;
        }
        return total;
      }, 0);

      const points = lastGiveawayPointsForAllUser + prevPoints;

      const updatedUser = await updateUser(userId, {
        subscriberProfile: {
          points,
          lastGiveawayClaimDate: new Date(),
        },
      });

      return {
        ...updatedUser,
        subscriberProfile: {
          ...updatedUser.subscriberProfile,
          lastGiveawayPointsClaim:
            lastGiveawayPointsForAllUser + lastGiveawayPointsPerUser,
        },
      };
    } catch (error) {
      throw error;
    }
  };

  return claimUserGiveaways;
};
