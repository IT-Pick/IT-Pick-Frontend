import React from 'react';
import LiveDiscussion1 from '../../../assets/images/LiveDiscussion/LiveDiscussion1.png';
import LiveDiscussion2 from '../../../assets/images/LiveDiscussion/LiveDiscussion2.png';
import LiveDiscussion3 from '../../../assets/images/LiveDiscussion/LiveDiscussion3.png';


const LiveDiscussion: React.FC = () => {
  return (
    <div className="flex justify-center items-start h-screen w-screen">
      <div className="w-full p-5 rounded-lg">
      <h1 className="text-2xl font-bold text-[#2E333B] leading-[28px]">실시간 토론 BEST3</h1>

        <div className="flex overflow-x-auto space-x-3">
          <div className="min-w-[120px] bg-gray-200 rounded-lg text-center p-2 flex-shrink-0">
            <img
              src={LiveDiscussion1}
              alt="LiveDiscussion1"
              className="w-full h-auto rounded-lg mb-2"
            />
            <a href="/Post1" className="text-purple-700 no-underline">김현주 열애설 어떻게 생각함?</a>
          </div>
          <div className="min-w-[120px] bg-gray-200 rounded-lg text-center p-2 flex-shrink-0">
            <img
              src={LiveDiscussion2}
              alt="토론"
              className="w-full h-auto rounded-lg mb-2"
            />
            <a href="/Post2" className="text-purple-700 no-underline">김현주가 아깝다 vs 차은우가 아깝다</a>
          </div>
          <div className="min-w-[120px] bg-gray-200 rounded-lg text-center p-2 flex-shrink-0">
            <img
              src={LiveDiscussion3}
              alt="토론"
              className="w-full h-auto rounded-lg mb-2"
            />
            <a href="/LovelyPM" className="text-purple-700 no-underline">뉴진스! 뉴진스!</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDiscussion;
