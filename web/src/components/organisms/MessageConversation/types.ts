type attachment = {
  fileType: string;
  fileName: string;
  fileSizeInKB: number;
  downloadableUrl: string;
};

export type MessageProps = {
  id: string;
  attachmentURLs: Array<attachment>;
  content: string;
  senderId: string;
  createdAt: string;
};
