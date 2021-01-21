import ConversationRepository from '../../ports/ConversationRepository';

export type getFileToBlobUseCase = (params: { url: string }) => Promise<Blob>;

export const buildGetFileToBlob = (dependencies: {
  conversationRepo: ConversationRepository;
}): getFileToBlobUseCase => {
  const { conversationRepo } = dependencies;

  const getFileToBlob: getFileToBlobUseCase = async (params: {
    url: string;
  }) => {
    try {
      const { url } = params;
      const blobData = await conversationRepo.getFileToBlob(url);

      return blobData;
    } catch (error) {
      throw error;
    }
  };

  return getFileToBlob;
};
