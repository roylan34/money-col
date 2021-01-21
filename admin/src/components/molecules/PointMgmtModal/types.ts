export type ScheduleValues = '即時' | '予約する';

export type PointMgmtValues = {
  points: number;
  schedule: ScheduleValues;
  date?: string;
  time?: string;
};
