import AuthService from '../../ports/AuthService';

export type verifyEmailUseCase = (oobCode: string) => Promise<object | void>;

export const buildVerifyEmail = (dependencies: {
  authService: AuthService;
}): verifyEmailUseCase => {
  const { authService } = dependencies;

  const verifyEmail: verifyEmailUseCase = (oobCode) =>
    authService.verifyEmail(oobCode);

  return verifyEmail;
};
