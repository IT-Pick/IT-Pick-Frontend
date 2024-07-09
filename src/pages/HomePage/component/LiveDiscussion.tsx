import React from 'react';
import LiveDiscussion1 from '../../../assets/images/LiveDiscussion/LiveDiscussion1.png';
import LiveDiscussion2 from '../../../assets/images/LiveDiscussion/LiveDiscussion2.png';
import LiveDiscussion3 from '../../../assets/images/LiveDiscussion/LiveDiscussion3.png';
import Hits from '../../../assets/images/LiveDiscussion/Hits.svg';
import Comment from '../../../assets/images/LiveDiscussion/Comment.svg';

const LiveDiscussion: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-screen">
      <div className="w-full p-5">
        <h1 className="text-2xl font-bold text-[#2E333B] leading-[28px]">실시간 토론 BEST3</h1>
        <div className="flex overflow-x-auto space-x-3 mt-[13px]">
          <div className="min-w-[200px] bg-white rounded-lg p-2 flex-shrink-0 shadow-md">
            <img
              src={LiveDiscussion1}
              alt="LiveDiscussion1"
              className="w-full h-auto rounded-lg mb-2"
            />
            <div className="flex justify-between items-center text-sm text-gray-500 mb-2 px-2">
              <div className="flex items-center">
                <img src={Hits} alt="Hits" className="w-4 h-4 mr-1" />
                <span className="text-[#1D2228] font-pretendard font-bold text-[16px] leading-[22.4px]">1,210</span>
              </div>
              <div className="flex items-center">
                <img src={Comment} alt="Comment" className="w-4 h-4 mr-1" />
                <span className="text-[#1D2228] font-pretendard font-bold text-[16px] leading-[22.4px]">123</span>
              </div>
            </div>
            <a href="/Post1" className="block text-[#1D2228] font-pretendard font-bold text-[16px] leading-[22.4px] no-underline text-center mt-2">김현주 열애설 어떻게 생각함?</a>
          </div>
          <div className="min-w-[200px] bg-white rounded-lg p-2 flex-shrink-0 shadow-md">
            <img
              src={LiveDiscussion2}
              alt="LiveDiscussion2"
              className="w-full h-auto rounded-lg mb-2"
            />
            <div className="flex justify-between items-center text-sm text-gray-500 mb-2 px-2">
              <div className="flex items-center">
                <img src={Hits} alt="Hits" className="w-4 h-4 mr-1" />
                <span className="text-[#1D2228] font-pretendard font-bold text-[16px] leading-[22.4px]">990</span>
              </div>
              <div className="flex items-center">
                <img src={Comment} alt="Comment" className="w-4 h-4 mr-1" />
                <span className="text-[#1D2228] font-pretendard font-bold text-[16px] leading-[22.4px]">80</span>
              </div>
            </div>
            <a href="/Post2" className="block text-[#1D2228] font-pretendard font-bold text-[16px] leading-[22.4px] no-underline text-center mt-2">김현주가 아깝다 vs 차은우가 아깝다</a>
          </div>
          <div className="min-w-[200px] bg-white rounded-lg p-2 flex-shrink-0 shadow-md">
            <img
              src={LiveDiscussion3}
              alt="LiveDiscussion3"
              className="w-full h-auto rounded-lg mb-2"
            />
            <div className="flex justify-between items-center text-sm text-gray-500 mb-2 px-2">
              <div className="flex items-center">
                <img src={Hits} alt="Hits" className="w-4 h-4 mr-1" />
                <span className="text-[#1D2228] font-pretendard font-bold text-[16px] leading-[22.4px]">338</span>
              </div>
              <div className="flex items-center">
                <img src={Comment} alt="Comment" className="w-4 h-4 mr-1" />
                <span className="text-[#1D2228] font-pretendard font-bold text-[16px] leading-[22.4px]">45</span>
              </div>
            </div>
            <a href="/LovelyPM" className="block text-[#1D2228] font-pretendard font-bold text-[16px] leading-[22.4px] no-underline text-center mt-2">뉴진스! 뉴진스!</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDiscussion;
