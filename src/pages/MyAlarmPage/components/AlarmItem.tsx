import React from 'react';
import { Alarm } from '../../../data/types';
import { getTimeDifference } from '../../../utils/timeUtils'

interface AlarmItemProps extends Alarm {
  onAlarmClick: (id: number) => void;
}

const AlarmItem: React.FC<AlarmItemProps> = (
  { id, title, about, tag, time, isRead, onAlarmClick }
) => {
  return (
    <div 
      className={`p-4 mb-2 rounded-lg ${isRead ? 'bg-white' : 'bg-[#F3EEFF]'}`}
      onClick={() => onAlarmClick(id)}
    >
      <div className="flex justify-between">
        <div className="text-[14px] text-gray5 font-semibold">{title} {about}</div>
      </div>
      <p className='flex space-x-[4px] text-[12px]'>
        <div className="text-gray3">{getTimeDifference(time)}</div>
        <div className='text-gray2'>|</div>
        <div className='text-point500'>{tag}</div>
      </p>
    </div>
  );
};

export default AlarmItem;