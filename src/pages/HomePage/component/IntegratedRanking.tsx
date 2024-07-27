import React from 'react';
import { useNavigate } from 'react-router-dom';
import tag_ico_right from "../../../assets/images/16x16/tag_ico_right.svg";

const rankingData = [
  { rank: 1, name: '김현주', tags: ['나무위키 1등', '트위터 1등'] },
  { rank: 2, name: '김현주 열애설', tags: ['네이버 1등', '트위터 2등'] },
  { rank: 3, name: '김현주 결혼', tags: ['네이버 2등', '디시인사이드 1등'] },
];

const RankingItem = ({ rank, name, tags }) => (
  <div className="flex flex-col w-full">
    <div className="flex items-start gap-5 mb-4">
      <div className="w-5 text-center text-violet-700 text-xl font-bold">{rank}</div>
      <div className="flex flex-col gap-1">
        <div className="text-gray-800 text-base font-medium leading-tight">{name}</div>
        <div className="flex gap-1">
          {tags.map((tag, index) => (
            <div key={index} className="px-2 py-1 bg-purple-100 rounded-2xl text-xs text-violet-700 font-medium">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className=" h-[2px] bg-[#EDF0F3] mt-[10px]" />
  </div>
);

const IntegratedRanking: React.FC = () => {
  const navigate = useNavigate();

  const handleRankingClick = () => {
    navigate('/ranking');
  };

  return (
    <div className="flex flex-col items-start pt-10 ml-[24px]">
      <div className="flex justify-between items-center w-full mb-[16px]">
        <div className="flex items-center">
          <span className="text-[#2E333B] font-pretendard text-[20px] font-bold leading-normal">통합 랭킹</span>
          <span className="text-xs text-gray-500 ml-[8px]">4월 1일 18:00 기준</span>
        </div>
        <span className="ml-[43px] cursor-pointer" onClick={handleRankingClick}>
          <div className="inline-flex items-center justify-start mr-[24px]">
            <span className="w-[50px] h-5 text-right text-gray-400 text-sm font-medium font-['Pretendard']">랭킹보기</span>
            <img src={tag_ico_right} alt="tag_ico_right" />
          </div>
        </span>
      </div>
      <div className="w-full flex flex-col gap-4 mt-[16px]">
        {rankingData.map((item) => (
          <RankingItem key={item.rank} {...item} />
        ))}
      </div>
    </div>
  );
};

export default IntegratedRanking;
