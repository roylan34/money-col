import { Giveaway } from '../../../domain/entities/giveaway';
import GiveawayRepository from '../../ports/GiveawayRepository';

export type addGiveawayUseCase = (params: Giveaway) => Promise<Giveaway>;
export const buildAddGiveaway = (dependencies: {
  giveawayRepo: GiveawayRepository;
}): addGiveawayUseCase => {
  const { giveawayRepo } = dependencies;

  const addGiveaway: addGiveawayUseCase = async (params) => {
    try {
      const id = await giveawayRepo.insert(params);

      const [giveaway] = await giveawayRepo.find({ where: [['id', '==', id]] });

      if (!giveaway) {
        throw new Error('Something went wrong.');
      }

      return giveaway;
    } catch (error) {
      throw error;
    }
  };

  return addGiveaway;
};
