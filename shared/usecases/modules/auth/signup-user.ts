import AuthService from '../../ports/AuthService';
import { createUserUseCase } from '../user/create-user';
import { fireBaseError, capitalizeFirstLetter } from '../../../utils';

export type signUpUserUseCase = (
  email: string,
  password: string,
  lastName: string,
  firstName: string,
  subscribedToMailingList: boolean,
) => Promise<object | void>;

export const buildSignUpUser = (dependencies: {
  authService: AuthService;
  userInteractor: {
    createUser: createUserUseCase;
  };
}): signUpUserUseCase => {
  const {
    authService,
    userInteractor: { createUser },
  } = dependencies;

  const signUpUser: signUpUserUseCase = async (
    email: string,
    password: string,
    lastName: string,
    firstName: string,
    subscribedToMailingList: boolean,
  ) => {
    try {
      const name = capitalizeFirstLetter(`${lastName} ${firstName}`);
      const { id } = await authService.signUp(email, password, name);

      const userId = await createUser({
        id,
        lastName,
        firstName,
        email,
        subscribedToMailingList,
      });

      return { id: userId };
    } catch (error) {
      if (error.code) {
        throw { ...error, message: fireBaseError(error.code) };
      }
      throw error;
    }
  };

  return signUpUser;
};
