interface Alarm {
    id: number;
    title: string;
    about: string;
    tag: string;
    time: number;
    isRead?: boolean;
  }
  
export const Alarms: Alarm[] = [
    { id: 1, title: '[김현주 열애설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요.", tag:"#김현주_열애설", time: 202406310001 },
    { id: 2, title: '[김현주 열애설 어떻게 생각함?]', about: "토론이 인기글에 선정되었어요.", tag:"#김현주_열애설",time: 202406310001 },
    { id: 3, title: '[김현주 열애설 어떻게 생각함? 나는 일단 안 믿을래. 김현주는 우리 모두의 것이니까.]',tag:"#김현주_열애설", about: "토론에 댓글이 달렸어요", time: 202408032130 },
    { id: 4, title: '[잇픽 일등할 것 같은 사람 모여봐]', about: "토론에 댓글이 달렸어요",tag:"#김현주_열애설", time: 202407010001 },
    { id: 5, title: '[김현주 불화설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", tag:"#김현주_열애설",time: 202407010001 },
    { id: 6, title: '[김현주 최고설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", tag:"#김현주_열애설",time: 202407250001 },
    { id: 7, title: '[김현주 최고설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", tag:"#김현주_열애설",time: 202407250001 },
    { id: 8, title: '[김현주 최고설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", tag:"#김현주_열애설",time: 202407251201 },
    { id: 9, title: '[김현주 열애설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", tag:"#김현주_열애설",time: 202408032130 },
    { id: 10, title: '[김현주 열애설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", tag:"#김현주_열애설",time: 202408011201 },
    { id: 11, title: '[김현주 최고설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", tag:"#김현주_열애설",time: 202408011201 },
    { id: 12, title: '[김현주 열애설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", tag:"#김현주_열애설",time: 202408011201 },
    { id: 13, title: '[김현주 열애설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", tag:"#김현주_열애설",time: 202408031230 },
    { id: 14, title: '[김현주 최고설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요",tag:"#김현주_열애설", time: 202408031330 },
    { id: 15, title: '[잇픽 최고설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요",tag:"#김현주_열애설", time: 202408032121 },
    { id: 16, title: '[김현주 열애설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", tag:"#김현주_열애설",time: 202408032130 },
];