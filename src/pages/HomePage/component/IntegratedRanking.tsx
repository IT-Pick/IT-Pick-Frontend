import React from 'react';

const IntegratedRanking: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-10 px-4">
      <span className="text-[#2E333B] font-pretendard text-[20px] font-normal leading-normal">통합 랭킹</span>
      <span className="text-xs text-gray-500 mt-1">4월 1일 18:00 기준</span>

      <div className="mt-4 w-full max-w-md">
        <div className="flex items-center mb-2">
          <span className="mr-2 font-bold text-purple-500">1</span>
          <div className="flex flex-col">
            <span className="flex h-[20px] items-center">김현주</span>
            <div className="flex mt-1 gap-1">
              <span className="flex h-[24px] items-center justify-center px-2 py-1 rounded-[16px] bg-[#F1E6FF] text-purple-500 text-sm">나무위키 1등</span>
              <span className="flex h-[24px] items-center justify-center px-2 py-1 rounded-[16px] bg-[#F1E6FF] text-purple-500 text-sm">트위터 1등</span>
            </div>
          </div>
        </div>

        <div className="flex items-center mb-2">
          <span className="mr-2 font-bold text-purple-500">2</span>
          <div className="flex flex-col">
            <span className="flex h-[20px] items-center">김현주 열애설</span>
            <div className="flex mt-1 gap-1">
              <span className="flex h-[24px] items-center justify-center px-2 py-1 rounded-[16px] bg-[#F1E6FF] text-purple-500 text-sm">네이버 1등</span>
              <span className="flex h-[24px] items-center justify-center px-2 py-1 rounded-[16px] bg-[#F1E6FF] text-purple-500 text-sm">트위터 2등</span>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <span className="mr-2 font-bold text-purple-500">3</span>
          <div className="flex flex-col">
            <span className="flex h-[20px] items-center">김현주 결혼</span>
            <div className="flex mt-1 gap-1">
              <span className="flex h-[24px] items-center justify-center px-2 py-1 rounded-[16px] bg-[#F1E6FF] text-purple-500 text-sm">네이버 2등</span>
              <span className="flex h-[24px] items-center justify-center px-2 py-1 rounded-[16px] bg-[#F1E6FF] text-purple-500 text-sm">디시인사이드 1등</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedRanking;
