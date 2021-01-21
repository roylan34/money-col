import PaymentRepository from '../../ports/PaymentHistoryRepository';
import UserRepository from '../../ports/UserRepository';
import { User } from '../../../domain/entities/user';

export type purchasePointsUsingPayPalUseCase = (
  userId: string,
  paymentHistId: string,
  chargeID: string,
) => Promise<User>;

export const buildPurchasePointsUsingPayPal = (dependencies: {
  paymentHistRepo: PaymentRepository;
  userRepo: UserRepository;
}): purchasePointsUsingPayPalUseCase => {
  const { paymentHistRepo, userRepo } = dependencies;

  const purchasePointsUsingPaypal: purchasePointsUsingPayPalUseCase = async (
    userId: string,
    paymentHistId: string,
    chargeID: string,
  ) => {
    const paymentHistDoc = await paymentHistRepo.findById(paymentHistId);

    try {
      if (paymentHistDoc) {
        await userRepo.addPoints(userId, paymentHistId, chargeID);
      }

      const user = await userRepo.findById(userId);

      if (!user) {
        throw new Error('404');
      }

      return user;
    } catch (error) {
      throw error;
    }
  };

  return purchasePointsUsingPaypal;
};
