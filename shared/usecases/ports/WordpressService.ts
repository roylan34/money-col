import { News } from '../../domain/entities/news';
import { WPPost } from '../../domain/entities/wpPost';

export default interface WordPressService {
  fetchNewsList(): Promise<News[]>;
  fetchPageBySlug(slug: string): Promise<WPPost>;
}
