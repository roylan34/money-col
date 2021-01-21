import { Message } from '../domain/entities';

type FormattedMessageType = {
  id: string;
  senderId: string;
  content: string;
  attachmentURLs: Array<{
    fileName: string;
    fileSizeInKB: string;
    downloadableUrl: string;
    fileType: string;
  }>;
};

export const formatMessage = (
  messages: Array<Message>,
): Array<FormattedMessageType> => {
  const formattedMessages = messages.map((msg) => {
    const { id, attachments = [], senderId, content, createdAt } = msg;
    const attachmentURLs = attachments.map((att) => {
      const { size, name, fileURL } = att;
      const fileType = name.replace(/^.+\./, '');
      return {
        fileName: name,
        fileSizeInKB: size,
        downloadableUrl: fileURL,
        fileType,
      };
    });

    const formattedContent = content.replace(/\\n/g, ' \n');

    const date = new Date(createdAt || 0);
    const time = date.toLocaleTimeString('en-GB');

    return {
      id,
      senderId,
      content: formattedContent,
      attachmentURLs,
      createdAt: time,
    };
  });

  return formattedMessages;
};
