import UserRepository from '../../ports/UserRepository';
import words from '../../../constants/words';

export type uploadPhotoUseCase = (id: string, photo: File) => Promise<string>;

export const buildUploadPhoto = (dependencies: {
  userRepo: UserRepository;
}): uploadPhotoUseCase => {
  const { userRepo } = dependencies;

  const uploadPhoto: uploadPhotoUseCase = async (id, photo) => {
    try {
      const fileExtention = photo.name.split('.').pop();
      const fileName = `users/${id}/photo.${fileExtention}`;

      const downloadURL = await userRepo.upload(fileName, photo);

      if (!downloadURL) {
        throw new Error(words.somethingWentWrong);
      }

      return downloadURL;
    } catch (error) {
      throw error;
    }
  };

  return uploadPhoto;
};
