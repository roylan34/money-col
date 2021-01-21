import WordpressService from '../../usecases/ports/WordpressService';
import WPAPI from 'wpapi';
import { News } from '../../domain/entities/news';
import { WPPost } from '../../domain/entities/wpPost';

export default class WordpressServiceImpl implements WordpressService {
  wpapi: WPAPI;

  constructor(
    wpapiConfig: {
      endpoint: string;
      username: string;
      password: string;
    },
    wpapi: typeof WPAPI,
  ) {
    this.wpapi = new wpapi({
      ...wpapiConfig,
      endpoint: `${wpapiConfig.endpoint}?rest_route=/`,
    });
  }

  fetchNewsList = async (): Promise<News[]> => {
    try {
      const posts = (await this.wpapi.posts()) as Array<{
        link: string;
        title: { rendered: string };
        date: Date;
        id: number;
      }>;
      const newsPosts = posts.filter(({ link }) => {
        const matches = link.match(/\/news\//);
        return matches && matches.length > 0;
      });

      return newsPosts.map((news) => {
        const { link, title, date, id } = news;
        const dateObj = new Date(date);
        const formattedDate = `${dateObj.getFullYear()}.${
          dateObj.getMonth() + 1
        }.${dateObj.getDate()}`;

        return {
          link,
          title: title.rendered,
          date: formattedDate,
          id: String(id),
        };
      });
    } catch (error) {
      throw error;
    }
  };

  fetchPageBySlug = async (slug: string): Promise<WPPost> => {
    const [page] = await this.wpapi.pages().slug(slug);
    const { content, date, title, link, id } = page;

    return { content, date, title, link, id };
  };
}
