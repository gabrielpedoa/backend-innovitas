export interface ILoadAllUsecase<T> {
  execute: () => Promise<T[]>;
}
