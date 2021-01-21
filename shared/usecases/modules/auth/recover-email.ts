import AuthService from '../../ports/AuthService';

export type recoverEmailUseCase = (oobCode: string) => Promise<object | void>;

export const buildRecoverEmail = (dependencies: {
  authService: AuthService;
}): recoverEmailUseCase => {
  const { authService } = dependencies;

  const recoverEmail: recoverEmailUseCase = async (oobCode) => {
    try {
      const { email, previousEmail } = await authService.recoverEmail(oobCode);

      // commenting this out; will fail if user is not logged in
      // just a workaround; might be better to use Functions and Admin SDK for these tasks
      // await updateUser(user.id, { email });

      return { email, previousEmail };
    } catch (error) {
      throw error;
    }
  };

  return recoverEmail;
};
