import { Purchase } from '../../../domain/entities/purchase';
import { ProjectContent } from '../../../domain/entities/projectContent';
import { VideoLecture } from '../../../domain/entities/videoLecture';
import { fetchMultipleProjectContentsUseCase } from '../projectContent/fetch-multiple-project-contents';
import { fetchMultipleVideosUseCase } from '../videoLecture/fetch-multiple-videos';
import PurchaseRepository from '../../ports/PurchaseRepository';

type PurchasedItems = {
  videoLectures: Array<VideoLecture>;
  projectContents: Array<ProjectContent>;
};

export type fetchPurchasedItemsUseCase = (
  userId: string,
) => Promise<PurchasedItems>;

export const buildFetchPurchasedItems = (dependencies: {
  purchaseRepo: PurchaseRepository;
  projectInteractor: {
    fetchMultipleProjectContents: fetchMultipleProjectContentsUseCase;
  };
  videoLectureInteractor: {
    fetchMultipleVideos: fetchMultipleVideosUseCase;
  };
}): fetchPurchasedItemsUseCase => {
  const {
    purchaseRepo,
    projectInteractor: { fetchMultipleProjectContents },
    videoLectureInteractor: { fetchMultipleVideos },
  } = dependencies;

  const fetchPurchasedItems: fetchPurchasedItemsUseCase = async (
    userId: string,
  ) => {
    try {
      const videoPurchases = await purchaseRepo.find(userId, {
        where: [['tags.videoLectures', '==', true]],
      });
      const videoIds = extractIds(videoPurchases);
      const purchasedVideoLectures = await fetchMultipleVideos(videoIds);

      const projectContentPurchases = await purchaseRepo.find(userId, {
        where: [['tags.projectContents', '==', true]],
      });
      const projectIds = extractIds(projectContentPurchases);
      const purchasedProjects = await fetchMultipleProjectContents(projectIds);

      return {
        videoLectures: purchasedVideoLectures,
        projectContents: purchasedProjects,
      };
    } catch (error) {
      throw error;
    }
  };

  return fetchPurchasedItems;
};

const extractIds = (purchases: Purchase[] | undefined): Array<string> => {
  let ids: Array<string> = [];

  if (purchases) {
    purchases.forEach((purchase) => {
      ids.push(purchase.ref.split('/')[1]);
    });
  }

  return ids;
};
