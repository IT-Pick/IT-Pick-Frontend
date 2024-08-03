import React from 'react';

interface Alarm {
  id: number;
  title: string;
  about: string;
  tag: string;
  time: number; // timestamp
}

const Alarms: Alarm[] = [
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

const parseTime = (time: number) => {
  const timeStr = time.toString();
  const year = parseInt(timeStr.substring(0, 4), 10);
  const month = parseInt(timeStr.substring(4, 6), 10) - 1; // 월은 0부터 시작
  const day = parseInt(timeStr.substring(6, 8), 10);
  const hours = parseInt(timeStr.substring(8, 10), 10);
  const minutes = parseInt(timeStr.substring(10, 12), 10);
  return new Date(year, month, day, hours, minutes);
};

const AlarmItem: React.FC<Alarm> = ({title, about, tag,time }) => {
  const getTimeDifference = (timestamp: number) => {
    const alarmTime = parseTime(timestamp);
    const now = new Date();
    const diffInMs = now.getTime() - alarmTime.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    } else {
      return `${diffInDays}일 전`;
    }
  };

  return (
  <div className="bg-[#F3EEFF] p-4 mb-2 rounded-lg">
      <div className="flex justify-between">
        <div className="text-[14px] text-gray5 font-semibold">{title} {about}</div>
      </div>
      <p className='flex space-x-[4px] text-[12px]'>
        <div className=" text-gray3"> {getTimeDifference(time)}</div>
        <div className='text-gray2'> | </div>
        <div className=' text-point500'> {tag} </div>
      </p>
  </div>
);
};
const AlarmPage: React.FC = () => {
  const sortedAlarms = Alarms.sort((a, b) => b.time - a.time);
  return (
    <div className="w-[390px] mx-auto bg-white">
      <header className="w-full py-4 border-b">
        <h1 className="text-[20px] text-black font-bold ml-4">알림</h1>
      </header>
      <div className="p-4">
        {sortedAlarms.map((alarm) => (
          <AlarmItem key={alarm.id} {...alarm} />
        ))}
      </div>
    </div>
  );
}


export default AlarmPage;