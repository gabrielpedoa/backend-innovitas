export interface IAuthUsecase<In, Out> {
  execute: (data: In) => Promise<Out>;
}
