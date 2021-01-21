import SettingsRepository from '../../ports/SettingsRepository';

import {
  buildFetchPointsPrice,
  fetchPointsPriceUseCase,
} from './fetch-points-price';

export default (dependencies: {
  settingsRepo: SettingsRepository;
}): {
  fetchPointsPrice: fetchPointsPriceUseCase;
} => {
  const { settingsRepo } = dependencies;

  const fetchPointsPrice = buildFetchPointsPrice({ settingsRepo });

  return {
    fetchPointsPrice,
  };
};
