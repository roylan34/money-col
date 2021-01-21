import AuthService from '../../ports/AuthService';

export type updateEmailUseCase = (params: {
  email: string;
  password: string;
}) => Promise<void>;

export const buildUpdateEmail = (dependencies: {
  authService: AuthService;
}): updateEmailUseCase => {
  const { authService } = dependencies;

  const updateEmail: updateEmailUseCase = (params) => {
    return authService.updateEmail(params.email, params.password);
  };

  return updateEmail;
};
