interface IController<In, Out> {
  handle: (data: In) => Promise<IHttpResponse<Out>>;
}
