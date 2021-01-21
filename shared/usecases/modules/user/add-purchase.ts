import { User, UserRankTitle } from '../../../domain/entities/user';
import { Purchase } from '../../../domain/entities/purchase';
import UserRepository from '../../ports/UserRepository';
import { fetchPurchaseUseCase } from '../purchase/fetch-purchase';
import { getDiscountValue } from './utils';
import words from '../../../constants/words';

type CollectionKey =
  | 'manuals'
  | 'EAPrograms'
  | 'videoLectures'
  | 'projectContents';

export type addPurchaseUseCase = (params: {
  userId: string;
  collectionKey: CollectionKey;
  itemId: string;
  rank: UserRankTitle;
}) => Promise<{ user: User; purchase: Purchase }>;

export const buildAddPurchase = (dependencies: {
  userRepo: UserRepository;
  purchaseInteractor: {
    fetchPurchase: fetchPurchaseUseCase;
  };
}): addPurchaseUseCase => {
  const {
    userRepo,
    purchaseInteractor: { fetchPurchase },
  } = dependencies;

  const addPurchase: addPurchaseUseCase = async ({
    userId,
    collectionKey,
    itemId,
    rank,
  }) => {
    try {
      const purchaseDoc = {
        id: `${userId}_${itemId}`,
        ref: `${collectionKey}/${itemId}`,
        title: getTitle(collectionKey),
        tags: {
          [collectionKey]: true,
        },
      };

      let discount = getDiscountValue(rank);

      const pointRefund = await userRepo.purchaseContent(
        userId,
        itemId,
        purchaseDoc,
        discount,
      );

      const user = await userRepo.findById(userId);

      const [purchase] = await fetchPurchase(userId, {
        where: [['id', '==', purchaseDoc.id]],
      });

      if (!user || !purchase) {
        throw new Error('An error occured');
      }

      return { user, purchase: { ...purchase, pointRefund } };
    } catch (error) {
      throw error;
    }
  };

  return addPurchase;
};

const getTitle = (key: keyof typeof words.purchaseHistory) => {
  return words.purchaseHistory[key] || words.purchaseHistory.default;
};
