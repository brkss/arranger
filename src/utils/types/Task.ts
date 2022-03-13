

export interface ITask {
  uid: string;
  name: string;
  limitHour: number;
  limitMinutes: number;
  time: string;
  start: number;
  active: boolean;
  progress: number;
}
