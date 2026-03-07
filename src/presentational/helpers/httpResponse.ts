function httpResponse<T>(statusCode: number, body: T): IHttpResponse<T> {
  return {
    statusCode,
    body,
  };
}

export const Ok = <T>(data: T): IHttpResponse<T> => httpResponse(200, data);

export const Created = <T>(data: T): IHttpResponse<T> =>
  httpResponse(201, data);

export const BadRequest = (message: string): IHttpResponse<{ error: string }> =>
  httpResponse(400, { error: message });

export const Unauthorized = (): IHttpResponse<{ error: string }> =>
  httpResponse(401, { error: "Unauthorized" });

export const NotFound = (): IHttpResponse<{ error: string }> =>
  httpResponse(404, { error: "Resource not found" });

export const ExceptionError = (
  error: unknown,
): IHttpResponse<{ error: string }> => {
  if (error instanceof Error) return BadRequest(error.message);

  return httpResponse(500, {
    error: "Internal server error",
  });
};
