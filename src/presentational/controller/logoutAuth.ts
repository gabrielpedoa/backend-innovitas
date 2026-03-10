export class LogoutController {
  async handle() {
    return {
      statusCode: 200,
      body: { message: "Logout successful" },
      cookies: [
        {
          name: "access_token",
          value: "",
          options: {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 0,
          },
        },
      ],
    };
  }
}
