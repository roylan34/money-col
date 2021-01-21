import WPService from '../../ports/WordpressService';

import { buildFetchNews, fetchNewsUseCase } from './fetch-news';

export default (dependencies: {
  wpService: WPService;
}): {
  fetchNewsList: fetchNewsUseCase;
} => {
  const { wpService } = dependencies;

  const fetchNewsList = buildFetchNews({ wpService });

  return { fetchNewsList };
};
