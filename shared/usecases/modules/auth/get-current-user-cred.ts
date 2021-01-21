import AuthService from '../../ports/AuthService';
import { FirebaseUser } from '../../../drivers/Firestore';

export type getCurrentUserlUseCase = () => FirebaseUser | null;

export const buildGetCurrentUserCredentials = (dependencies: {
  authService: AuthService;
}): getCurrentUserlUseCase => {
  const { authService } = dependencies;

  const getCurrentUserCredentials: getCurrentUserlUseCase = () => {
    return authService.getCurrentUserCredentials();
  };

  return getCurrentUserCredentials;
};
