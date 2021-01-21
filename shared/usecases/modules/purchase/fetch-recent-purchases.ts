import { Purchase } from '../../../domain/entities/purchase';
import { Manual } from '../../../domain/entities/manual';
import { VideoLecture } from '../../../domain/entities/videoLecture';

import { fetchMultipleManualsUseCase } from '../manual/fetch-multiple-manuals';
import { fetchMultipleVideosUseCase } from '../videoLecture/fetch-multiple-videos';

import PurchaseRepository from '../../ports/PurchaseRepository';

export type fetchRecentPurchaseUseCase = (
  userId: string,
  tags: 'manuals' | 'videoLectures',
) => Promise<Purchase[] | Manual[] | VideoLecture[]>;
export const buildFetchRecentPurchase = (dependencies: {
  purchaseRepo: PurchaseRepository;
  manualInteractor: {
    fetchMultipleManuals: fetchMultipleManualsUseCase;
  };
  videoLectureInteractor: { fetchMultipleVideos: fetchMultipleVideosUseCase };
}): fetchRecentPurchaseUseCase => {
  const {
    purchaseRepo,
    manualInteractor: { fetchMultipleManuals },
    videoLectureInteractor: { fetchMultipleVideos },
  } = dependencies;

  const fetchRecentPurchase: fetchRecentPurchaseUseCase = async (
    userId: string,
    type: 'manuals' | 'videoLectures',
  ) => {
    try {
      const purchases = await purchaseRepo.find(userId, {
        where: [[`tags.${type}`, '==', true]],
        orderBy: 'createdAt',
        sort: 'desc',
        limit: 3,
      });

      if (!purchases) {
        throw new Error('Something went wrong.');
      }

      if (!purchases[0]) {
        return purchases;
      }

      const itemKeys = purchases.map((purchase) => {
        return purchase.id.split('_').pop();
      }) as Array<string>;

      return purchases[0].ref.split('/')[0] === 'videoLectures'
        ? await fetchMultipleVideos(itemKeys)
        : await fetchMultipleManuals(itemKeys);
    } catch (error) {
      throw error;
    }
  };

  return fetchRecentPurchase;
};
