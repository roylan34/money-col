type attachment = {
  fileType: string;
  fileName: string;
  fileSizeInKB: number;
  downloadableUrl: string;
};

export type MessageProps = {
  attachmentURLs: Array<attachment>;
  content: string;
  senderId: string;
  createdAt?: string;
  id: string;
};
