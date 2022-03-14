

export interface ITask {
  uid: string;
  name: string;
  limitHour: number;
  limitMinutes: number;
  start: number;
  active: boolean;
  progress: number;
}
