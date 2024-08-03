export interface Alarm {
    id: number;
    title: string;
    about: string;
    tag: string;
    time: number;
    isRead?: boolean;
  }