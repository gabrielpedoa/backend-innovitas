export interface IDashboardUsecase<T> {
  execute: () => Promise<T>;
}
