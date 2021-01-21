import GiveawayRepo from '../../ports/GiveawayRepository';
import { buildAddGiveaway, addGiveawayUseCase } from './add-giveaway';

export default (dependencies: {
  giveawayRepo: GiveawayRepo;
}): {
  addGiveaway: addGiveawayUseCase;
} => {
  const { giveawayRepo } = dependencies;

  const addGiveaway = buildAddGiveaway({ giveawayRepo });

  return { addGiveaway };
};
