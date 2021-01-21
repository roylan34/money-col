import PaymentRepository from '../../ports/PaymentHistoryRepository';
import UserRepository from '../../ports/UserRepository';
import { chargeCardUseCase } from './charge-card';
import { fetchUserUseCase } from './fetch-user';
import { User } from '../../../domain/entities/user';

export type purchasePointsUsingCardUseCase = (
  userId: string,
  pointsToBePurchased: number,
  stripeCustomerId: string,
  amountInJPY: number,
) => Promise<User>;

export const buildPurchasePointsUsingCard = (dependencies: {
  paymentHistRepo: PaymentRepository;
  userRepo: UserRepository;
  userInteractor: {
    chargeCard: chargeCardUseCase;
    fetchUser: fetchUserUseCase;
  };
}): purchasePointsUsingCardUseCase => {
  const {
    paymentHistRepo,
    userRepo,
    userInteractor: { chargeCard, fetchUser },
  } = dependencies;
  const purchasePointsUsingCard: purchasePointsUsingCardUseCase = async (
    userId: string,
    pointsToBePurchased: number,
    stripeCustomerId: string,
    amountInJPY: number,
  ) => {
    try {
      let user = await fetchUser({ id: userId });
      const paymentHistId = await paymentHistRepo.create({
        userId: userId,
        status: 'PENDING',
        type: 'クレジットカード',
        amount: amountInJPY,
        pointsPurchased: pointsToBePurchased,
        chargeID: '',
        email: user.email,
      });

      const paymentHistDoc = await paymentHistRepo.findById(paymentHistId);

      if (paymentHistDoc) {
        const charge = await chargeCard(stripeCustomerId, amountInJPY).catch(
          async (error) => {
            await paymentHistRepo.update(paymentHistDoc.id, {
              status: 'FAILED',
            });

            throw error;
          },
        );

        if (charge.paid && charge.id) {
          await userRepo.addPoints(userId, paymentHistId, charge.id);
          user = await fetchUser({ id: userId });
        }
      }

      return user;
    } catch (error) {
      throw error;
    }
  };

  return purchasePointsUsingCard;
};
