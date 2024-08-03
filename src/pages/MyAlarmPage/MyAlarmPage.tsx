import React, { useState, useEffect } from 'react';
import { Alarm } from '../../data/types';
import { Alarms } from '../../data/alarms';
import AlarmItem from './components/AlarmItem';

const getReadStatus = (): { [key: number]: boolean } => {
  const storedStatus = localStorage.getItem('alarmReadStatus');
  return storedStatus ? JSON.parse(storedStatus) : {};
};

const saveReadStatus = (status: { [key: number]: boolean }) => {
  localStorage.setItem('alarmReadStatus', JSON.stringify(status));
};

const MyAlarmPage: React.FC = () => {
  const [alarms, setAlarms] = useState<Alarm[]>([]);

  useEffect(() => {
    const readStatus = getReadStatus();
    const updatedAlarms = Alarms.map(alarm => ({
      ...alarm,
      isRead: readStatus[alarm.id] || false,
    }));
    setAlarms(updatedAlarms.sort((a, b) => b.time - a.time));
  }, []);

  const handleAlarmClick = (id: number) => {
    setAlarms(prevAlarms => {
      const newAlarms = prevAlarms.map(alarm => 
        alarm.id === id ? { ...alarm, isRead: true } : alarm
      );
      const newReadStatus = newAlarms.reduce((acc, alarm) => {
        acc[alarm.id] = alarm.isRead || false;
        return acc;
      }, {} as { [key: number]: boolean });
      saveReadStatus(newReadStatus);
      return newAlarms;
    });
  };

  return (
    <div className="w-[390px] mx-auto bg-background">
      <header className="w-full py-[24.5px] bg-white">
        <h1 className="text-[20px] text-black font-bold mt-[16px] ml-[24px] ">알림</h1>
      </header>
      <div>
        {alarms.map((alarm, index) => (
          <React.Fragment key={alarm.id}>
            <AlarmItem {...alarm} onAlarmClick={handleAlarmClick} />
            {index < alarms.length - 1 && <div className="border-[2px] border-[##edf0f3] h-[2px] "></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MyAlarmPage;
