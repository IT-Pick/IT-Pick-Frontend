import React from 'react';

interface Alarm {
  id: number;
  title: string;
  about: string;
  time: number;
}

const Alarms: Alarm[] = [
    { id: 1, title: '[김현주 열애설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요.",  time: 202406310001 },
    { id: 2, title: '[김현주 열애설 어떻게 생각함?]', about: "토론이 인기글에 선정되었어요.", time: 202406310110 },
    { id: 3, title: '[김현주 열애설 어떻게 생각함? 나는 일단 안 믿을래. 김현주는 우리 모두의 것이니까.]', about: "토론에 댓글이 달렸어요", time: 202407010001 },
    { id: 4, title: '[잇픽 일등할 것 같은 사람 모여봐]', about: "토론에 댓글이 달렸어요", time: 202407110001 },
    { id: 5, title: '[김현주 불화설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", time: 202407210001 },
    { id: 6, title: '[김현주 최고설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", time: 202407250001 },
    { id: 7, title: '[김현주 최고설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", time: 202407270001 },
    { id: 8, title: '[김현주 최고설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", time: 202407310001 },
    { id: 9, title: '[김현주 열애설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", time: 20240801001 },
    { id: 10, title: '[김현주 열애설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", time: 202408011101 },
    { id: 11, title: '[김현주 최고설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", time: 202408011201 },
    { id: 12, title: '[김현주 열애설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", time: 202408011401 },
    { id: 13, title: '[김현주 열애설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", time: 202408020401 },
    { id: 14, title: '[김현주 최고설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", time: 202408020601 },
    { id: 15, title: '[잇픽 최고설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", time: 202408021201 },
    { id: 16, title: '[김현주 열애설 어떻게 생각함?]', about: "토론에 댓글이 달렸어요", time: 202408021501 },
];

const AlarmItem: React.FC<Alarm> = ({ title, about, time }) => (
  <div className="bg-[#F3EEFF] p-4 mb-2 rounded-lg">
      <div className="flex justify-between">
        <div className="text-[16px] font-bold">{title} {about}</div>
      </div>
      <p className="text-[12px] text-gray-500">30분 전</p>
    
  </div>
);

const AlarmPage: React.FC = () => {
  return (
    <div className="w-[390px] mx-auto bg-white">
      <header className="w-full py-4 border-b">
        <h1 className="text-[20px] text-black font-bold ml-4">알림</h1>
      </header>
      <div className="p-4">
        {Alarms.map((alarm) => (
          <AlarmItem key={alarm.id} {...alarm} />
        ))}
      </div>
    </div>
  );
}

export default AlarmPage;