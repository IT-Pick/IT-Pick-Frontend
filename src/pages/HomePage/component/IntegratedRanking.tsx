import React from 'react';

const IntegratedRanking: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start pt-10 px-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <span className="text-[#2E333B] font-pretendard text-[20px] font-bold leading-normal">통합 랭킹</span>
          <span className="text-xs text-gray-500 ml-[8px]">4월 1일 18:00 기준</span>
        </div>
        <span className="text-xs text-gray-500">전체보기 &gt;</span>
      </div>

      <div className="mt-4 w-full max-w-md">
        <div className="flex items-center mb-4">
          <span className="font-bold text-purple-500 text-lg" style={{ marginLeft: '20px', marginRight: '8px' }}>1</span>
          <div className="flex flex-col" style={{ marginRight: '183px' }}>
            <span className="flex h-[20px] items-center">김현주</span>
            <div className="flex mt-1 gap-1">
              <span className="flex h-[24px] items-center justify-center px-2 py-1 rounded-[16px] bg-[#F1E6FF] text-purple-500 text-sm">나무위키 1등</span>
              <span className="flex h-[24px] items-center justify-center px-2 py-1 rounded-[16px] bg-[#F1E6FF] text-purple-500 text-sm">트위터 1등</span>
            </div>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <span className="font-bold text-purple-500 text-lg" style={{ marginLeft: '20px', marginRight: '8px' }}>2</span>
          <div className="flex flex-col" style={{ marginRight: '183px' }}>
            <span className="flex h-[20px] items-center">김현주 열애설</span>
            <div className="flex mt-1 gap-1">
              <span className="flex h-[24px] items-center justify-center px-2 py-1 rounded-[16px] bg-[#F1E6FF] text-purple-500 text-sm">네이버 1등</span>
              <span className="flex h-[24px] items-center justify-center px-2 py-1 rounded-[16px] bg-[#F1E6FF] text-purple-500 text-sm">트위터 2등</span>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <span className="font-bold text-purple-500 text-lg" style={{ marginLeft: '20px', marginRight: '8px' }}>3</span>
          <div className="flex flex-col" style={{ marginRight: '183px' }}>
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
