export type UserDetailsData = {
  name: string;
  email: string;
  createdAt: string;
  ownedPoints: number;
  rank: string;
};

export type PtUsageHistoryData = {
  id: string;
  event: string;
  eventDateAndTime: string;
  points: number;
};
