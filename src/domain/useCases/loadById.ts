export interface ILoadByIdUsecase<T> {
  execute: (data: { id: string }) => Promise<T | null>;
}
