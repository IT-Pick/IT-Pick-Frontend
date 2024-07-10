import React from 'react';

const IntegratedRanking: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start pt-10 px-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <span className="text-[#2E333B] font-pretendard text-[20px] font-bold leading-normal ml-[24px]">통합 랭킹</span>
          <span className="text-xs text-gray-500 ml-[8px]">4월 1일 18:00 기준</span>
        </div>
        <span className="text-xs text-gray-500">전체보기 &gt;</span>
      </div>

      <div className="mt-4 w-full max-w-md">
      <div className="w-[390px] h-[228px] flex-col justify-start items-start inline-flex">
    <div className="w-[390px] h-[76px] relative">
        <div className="left-[20px] top-[16px] absolute justify-start items-center gap-5 inline-flex">
            <div className="w-5 text-center text-violet-700 text-xl font-bold font-['Pretendard']">1</div>
            <div className="flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch h-5 text-gray-800 text-base font-medium font-['Pretendard'] leading-tight">김현주</div>
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="w-[77px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
                        <div className="text-violet-700 text-xs font-medium font-['Pretendard']">나무위키 1등</div>
                    </div>
                    <div className="w-[66px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
                        <div className="text-violet-700 text-xs font-medium font-['Pretendard']">트위터 1등</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-[390px] h-[76px] relative">
        <div className="left-[20px] top-[16px] absolute justify-start items-center gap-5 inline-flex">
            <div className="w-5 text-center text-violet-700 text-xl font-bold font-['Pretendard']">2</div>
            <div className="flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch h-5 text-gray-800 text-base font-medium font-['Pretendard'] leading-tight">김현주 열애설</div>
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="w-[66px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
                        <div className="text-violet-700 text-xs font-medium font-['Pretendard']">네이버 1등</div>
                    </div>
                    <div className="w-[68px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
                        <div className="text-violet-700 text-xs font-medium font-['Pretendard']">트위터 2등</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-[390px] h-[76px] relative">
        <div className="left-[20px] top-[16px] absolute justify-start items-center gap-5 inline-flex">
            <div className="w-5 text-center text-violet-700 text-xl font-bold font-['Pretendard']">3</div>
            <div className="flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch h-5 text-gray-800 text-base font-medium font-['Pretendard'] leading-tight">김현주 결혼</div>
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="w-[68px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
                        <div className="text-violet-700 text-xs font-medium font-['Pretendard']">네이버 2등</div>
                    </div>
                    <div className="w-[97px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
                        <div className="text-violet-700 text-xs font-medium font-['Pretendard']">디시인사이드 1등</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        
      </div>
    </div>
  );
};

export default IntegratedRanking;
