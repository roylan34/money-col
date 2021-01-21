import { Giveaway } from '../../domain/entities/giveaway';

export default interface GiveawayRepository {
  insert(params: Giveaway): Promise<string>;
  find(query: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean | Date,
    ][];
    limit?: number;
    page?: number;
    orderBy?: string;
    sort?: 'desc' | 'asc';
  }): Promise<Giveaway[]>;
}
