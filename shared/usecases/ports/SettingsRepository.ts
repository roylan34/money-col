export default interface SettingsRepository {
  fetchPriceOfPoints(): Promise<{ [key: string]: number }>;
}
