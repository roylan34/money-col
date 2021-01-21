import { User } from '../../../domain/entities/user';
import UserRepository from '../../ports/UserRepository';
import GiveawayRepository from '../../ports/GiveawayRepository';
import words from '../../../constants/words';
import { updateUserUseCase } from './update-user';

export type updateSubscriberUseCase = (
  id: string,
  points: number,
  inputPoints: number,
) => Promise<User>;

export const buildUpdateSubscriber = (dependencies: {
  giveawayRepo?: GiveawayRepository;
  userRepo: UserRepository;
  userInteractor: {
    updateUser: updateUserUseCase;
  };
}): updateSubscriberUseCase => {
  const {
    userRepo,
    userInteractor: { updateUser },
    giveawayRepo,
  } = dependencies;

  const updateSubscriberPoints: updateSubscriberUseCase = async (
    id,
    points,
    inputPoints,
  ) => {
    try {
      if (!id) {
        throw new Error(words.somethingWentWrong);
      }

      await updateUser(id, { subscriberProfile: { points: points } });

      const user = (await userRepo.findById(id)) as User;

      if (!user) {
        throw new Error(words.somethingWentWrong);
      }

      if (!giveawayRepo) {
        throw new Error('An error occured');
      }

      //insert giveaway per user
      const giveawayId = await giveawayRepo.insert({
        id: '',
        points: inputPoints,
        effectiveDate: new Date(),
        userId: id,
      });

      const [giveaway] = await giveawayRepo.find({
        where: [['id', '==', giveawayId]],
      });

      if (!giveaway) {
        throw new Error(words.somethingWentWrong);
      }

      return user;
    } catch (error) {
      throw error;
    }
  };

  return updateSubscriberPoints;
};
