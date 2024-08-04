import React from 'react';
import { getTimeDifference } from '../../../utils/timeUtils';

interface AlarmItemProps extends Alarm {
  onAlarmClick: (id: number) => void;
}

const AlarmItem: React.FC<AlarmItemProps> = (
  { id, title, about, tag, time, isRead, onAlarmClick }
) => {
  return (
    <div 
      className={`p-[16px] ${isRead ? 'bg-[#f8f9fc]' : 'bg-purple-100'}`}
      onClick={() => onAlarmClick(id)}
    > 
        <div className=''>
          <div className="text-[14px] text-gray-700 font-semibold">{title} {about}</div>
          <p className='flex space-x-[4px] text-[12px] text-gray-500'>
              <span className='text-gray3'>{getTimeDifference(time)}</span>
              <span className='text-gray2'>|</span>
              <span className='text-purple-500'>{tag}</span>
          </p>
        </div>
    </div>
  );
};

export default AlarmItem;
