import React from 'react';
import namuwiki from '../../../assets/images/CommunityLogo/namuwiki.svg';
import twitter from '../../../assets/images/CommunityLogo/twitter.svg';
import dcinside from '../../../assets/images/CommunityLogo/dcinside.svg';
import naver from '../../../assets/images/CommunityLogo/naver.svg';
import daumcafe from '../../../assets/images/CommunityLogo/daumcafe.svg';

const rankings = [
  { name: '나무위키', tag: '#김현주_열애설', icon: namuwiki },
  { name: '트위터', tag: '#김현주_연애', icon: twitter },
  { name: '디시인사이드', tag: '#김현주_남자친구', icon: dcinside },
  { name: '네이버', tag: '#김현주_결혼', icon: naver },
  { name: '다음카페', tag: '#김현주_공개연애', icon: daumcafe },
];

const CommunityRanking: React.FC = () => {
  return (
    <div className="items-start pt-10 px-4 ml-[24px]">
      <div className="">
        <span className="text-[#2E333B] font-pretendard text-[20px] font-bold leading-normal">통합 랭킹</span>
        <span className="text-xs text-gray-500 ml-[8px]">4월 1일 18:00 기준</span>
      </div>

      <ul className="mt-4 space-y-4">
        {rankings.map((item, index) => (
          <li key={index} className="flex items-center mb-4">
            <img src={item.icon} alt={item.name} className="w-8 h-8 mr-4" />
            <div className="flex-1">
              <span className="font-bold text-[#1D2228] font-pretendard text-[16px] leading-[22.4px]">{item.name}</span>
              <span className="text-gray5 font-pretendard text-[16px] mr-[28px] ">{item.tag}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityRanking;
