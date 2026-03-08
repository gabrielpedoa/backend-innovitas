export interface ILoadAllPaginatedUsecase<T> {
  execute(params: LoadPaginatedParams): Promise<T>;
}