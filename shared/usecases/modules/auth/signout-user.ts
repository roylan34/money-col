import AuthService from '../../ports/AuthService';

export type signOutUserUseCase = () => Promise<void>;

export const buildSignOutUser = (dependencies: {
  authService: AuthService;
}): signOutUserUseCase => {
  const { authService } = dependencies;

  const signOutUser: signOutUserUseCase = () =>
    authService.signOut().catch((error) => {
      throw error;
    });

  return signOutUser;
};
