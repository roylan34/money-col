import AuthService from '../../ports/AuthService';

export type verifyPasswordResetCodeUseCase = (
  oobCode: string,
) => Promise<string>;

export const buildVerifyPasswordResetCode = (dependencies: {
  authService: AuthService;
}): verifyPasswordResetCodeUseCase => {
  const { authService } = dependencies;

  const verifyPasswordResetCode: verifyPasswordResetCodeUseCase = (oobCode) =>
    authService.verifyPasswordResetCode(oobCode);

  return verifyPasswordResetCode;
};
