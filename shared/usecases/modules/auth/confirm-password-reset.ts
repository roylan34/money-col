import AuthService from '../../ports/AuthService';

export type confirmPasswordResetUseCase = (
  oobCode: string,
  password: string,
) => Promise<void>;

export const buildConfirmPasswordReset = (dependencies: {
  authService: AuthService;
}): confirmPasswordResetUseCase => {
  const { authService } = dependencies;

  const confirmPasswordReset: confirmPasswordResetUseCase = (
    oobCode,
    password,
  ) => authService.confirmPasswordReset(oobCode, password);

  return confirmPasswordReset;
};
