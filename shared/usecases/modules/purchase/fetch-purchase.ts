import { Purchase } from '../../../domain/entities/purchase';
import PurchaseRepository from '../../ports/PurchaseRepository';
import { Timestamp } from '../../../drivers/Firestore';

export type fetchPurchaseUseCase = (
  userId: string,
  query: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit?: number;
    page?: number;
    mode: 'prev' | 'next';
    orderBy?: string;
    sort?: 'desc' | 'asc';
  },
) => Promise<{
  Purchase: {
    data: Array<Purchase & { createdAt: Timestamp }>;
    hasPrevPage: boolean;
    hasNextPage: boolean;
  };
}>;

export const buildFetchPurchase = (dependencies: {
  purchaseRepo: PurchaseRepository;
}): fetchPurchaseUseCase => {
  const { purchaseRepo } = dependencies;

  const fetchPurchase: fetchPurchaseUseCase = async (userId: string, query) => {
    try {
      const purchase = await purchaseRepo.find(userId, query);

      if (!purchase) {
        throw new Error('Something went wrong.');
      }
      return purchase;
    } catch (error) {
      throw error;
    }
  };

  return fetchPurchase;
};
