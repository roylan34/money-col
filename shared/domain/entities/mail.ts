export type EmailTypes = 'completedPendingTransaction' | 'hasReplied';

export type Mail = {
  template: {
    name: string;
    data: {
      name: string;
    };
  };
  to: string;
};
