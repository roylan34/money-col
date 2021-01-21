import WPService from '../../ports/WordpressService';
import {
  buildFetchWPPostsBySlug,
  fetchWPPostsBySlugUseCase,
} from './fetch-wp-posts-by-slug';

export default (dependencies: {
  wpService: WPService;
}): {
  fetchWPPostsBySlug: fetchWPPostsBySlugUseCase;
} => {
  const { wpService } = dependencies;

  const fetchWPPostsBySlug = buildFetchWPPostsBySlug({ wpService });

  return { fetchWPPostsBySlug };
};
