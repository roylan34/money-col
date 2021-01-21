import WPService from '../../ports/WordpressService';
import { WPPost } from '../../../domain/entities/wpPost';

export type fetchWPPostsBySlugUseCase = (slug: string) => Promise<WPPost>;

export const buildFetchWPPostsBySlug = (dependencies: {
  wpService: WPService;
}): fetchWPPostsBySlugUseCase => {
  const { wpService } = dependencies;

  const fetchWPPostsBySlug: fetchWPPostsBySlugUseCase = async (
    slug: string,
  ) => {
    try {
      const manuals = await wpService.fetchPageBySlug(slug);

      return manuals;
    } catch (error) {
      throw error;
    }
  };

  return fetchWPPostsBySlug;
};
