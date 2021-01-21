import { News } from '../../../domain/entities/news';
import WPService from '../../ports/WordpressService';

export type fetchNewsUseCase = () => Promise<News[]>;

export const buildFetchNews = (dependencies: {
  wpService: WPService;
}): fetchNewsUseCase => {
  const { wpService } = dependencies;

  const fetchNews: fetchNewsUseCase = async () => {
    try {
      const news = await wpService.fetchNewsList();

      if (!news) {
        throw new Error('There was an error in processing your request.');
      }

      return news;
    } catch (error) {
      throw error;
    }
  };

  return fetchNews;
};
