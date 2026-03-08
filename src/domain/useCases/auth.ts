export interface IAuthUsecase {
  execute: ({
    email,
    password,
  }: LoginRequest) => Promise<{ user: { id: number; name: string; email: string }; token: string }>;
}
