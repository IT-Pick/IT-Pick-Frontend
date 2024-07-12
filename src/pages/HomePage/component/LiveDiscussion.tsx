import React from 'react';
import LiveDiscussion1 from '../../../assets/images/LiveDiscussion/LiveDiscussion1.png';
import LiveDiscussion2 from '../../../assets/images/LiveDiscussion/LiveDiscussion2.png';
import LiveDiscussion3 from '../../../assets/images/LiveDiscussion/LiveDiscussion3.png';
import Hits from '../../../assets/images/LiveDiscussion/Hits.svg';
import Comment from '../../../assets/images/LiveDiscussion/Comment.svg';

const LiveDiscussion: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="p-5">
        <div className="text-gray-800 text-xl font-bold font-['Pretendard'] leading-7 ml-[24px]">실시간 토론 BEST3</div>
        <div className="flex overflow-x-auto space-x-[12px] mt-[13px]">
          <div className="p-2 flex-shrink-0">
            <img
              src={LiveDiscussion1}
              alt="LiveDiscussion1"
              className="w-[164px] h-[200px] rounded-lg mb-2"
            />
            <div className="w-[130px] h-6 justify-start items-start gap-2 inline-flex">
              <div className="w-[65px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
                <div className="w-4 h-4 relative" />
                <div className="text-violet-700 text-xs font-medium font-['Pretendard']">1,210</div>
              </div>
              <div className="w-[57px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
                <div className="w-4 h-4 relative" />
                <div className="text-violet-700 text-xs font-medium font-['Pretendard']">123</div>
              </div>
            </div>
            <a href="/Post1" className="block text-[#1D2228] font-pretendard font-bold text-[16px] leading-[22.4px] no-underline text-center mt-2">김현주 열애설 어떻게 생각함?</a>
          </div>

          <div className="p-2 flex-shrink-0">
            <img
              src={LiveDiscussion2}
              alt="LiveDiscussion2"
              className="w-[164px] h-[200px] rounded-lg mb-2"
            />
            <div className="w-[130px] h-6 justify-start items-start gap-2 inline-flex">
              <div className="w-[65px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
                <div className="w-4 h-4 relative" />
                <div className="text-violet-700 text-xs font-medium font-['Pretendard']">990</div>
              </div>
              <div className="w-[57px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
                <div className="w-4 h-4 relative" />
                <div className="text-violet-700 text-xs font-medium font-['Pretendard']">45</div>
              </div>
            </div>
            <a href="/Post2" className="block text-[#1D2228] font-pretendard font-bold text-[16px] leading-[22.4px] no-underline text-center mt-2">김현주가 아깝다 vs 차은우가 아깝다</a>
          </div>
          <div className="p-2 flex-shrink-0">
            <img
              src={LiveDiscussion3}
              alt="LiveDiscussion3"
              className="w-[164px] h-[200px] rounded-lg mb-2"
            />
            <div className="w-[130px] h-6 justify-start items-start gap-2 inline-flex">
              <div className="w-[65px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
                <div className="w-4 h-4 relative" />
                <div className="text-violet-700 text-xs font-medium font-['Pretendard']">990</div>
              </div>
              <div className="w-[57px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
                <div className="w-4 h-4 relative" />
                <div className="text-violet-700 text-xs font-medium font-['Pretendard']">45</div>
              </div>
            </div>
            <a href="/Post3" className="block text-[#1D2228] font-pretendard font-bold text-[16px] leading-[22.4px] no-underline text-center mt-2">김현주가 아깝다 vs 차은우가 아깝다</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDiscussion;
