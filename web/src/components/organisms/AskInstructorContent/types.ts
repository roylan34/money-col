export type RequiredParams = {
  isRequired: boolean;
};

export type SubmitValues = {
  instructor: string;
  title: string;
  description: string;
  file?: Array<File>;
};
