import SettingsRepository from '../../ports/SettingsRepository';

export type fetchPointsPriceUseCase = () => Promise<{ [key: string]: number }>;

export const buildFetchPointsPrice = (dependencies: {
  settingsRepo: SettingsRepository;
}): fetchPointsPriceUseCase => {
  const { settingsRepo } = dependencies;

  const fetchPointsPrice: fetchPointsPriceUseCase = async () => {
    try {
      const priceOfPoints = await settingsRepo.fetchPriceOfPoints();

      return priceOfPoints;
    } catch (error) {
      throw error;
    }
  };

  return fetchPointsPrice;
};
