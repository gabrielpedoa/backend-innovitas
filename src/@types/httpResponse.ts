type IHttpResponse<T> = {
  statusCode: number;
  body: T;
  cookies?: {
    name: string;
    value: string;
    options?: any;
  }[];
};
