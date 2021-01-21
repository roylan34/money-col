import AuthService from '../../ports/AuthService';
import { fireBaseError } from '../../../utils';

export type sendResetPasswordEmailUseCase = (email: string) => Promise<void>;

export const buildSendResetPasswordEmail = (dependencies: {
  authService: AuthService;
}): sendResetPasswordEmailUseCase => {
  const { authService } = dependencies;

  const sendResetPasswordEmail: sendResetPasswordEmailUseCase = async (
    email,
  ) => {
    try {
      await authService.sendPasswordResetEmail(email);
    } catch (error) {
      if (error.code) {
        throw { ...error, message: fireBaseError(error.code) };
      }
      throw error;
    }
  };

  return sendResetPasswordEmail;
};
