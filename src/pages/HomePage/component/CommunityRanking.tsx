import React from 'react';
import tag_ico_right from "../../../assets/images/16x16/tag_ico_right.svg";
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
    <div className=" mt-[44px] ">
      <span className='ml-[24px]'>
        <span className="text-[#2E333B] font-pretendard text-[20px] font-bold leading-normal">커뮤니티 별 랭킹</span>
        <span className="text-xs text-gray-500 ml-[8px]">4월 1일 18:00 기준</span>
      </span>
      <span className="ml-[43px]">
        <div className="inline-flex items-center justify-start">
          <span className="w-[50px] h-5 text-right text-gray-400 text-sm font-medium font-['Pretendard']">랭킹보기</span>
          <img src={tag_ico_right} alt="tag_ico_right" />
        </div>
      </span>

      <ul className="ml-[24px] mt-[24px] space-y-4">
        {rankings.map((item, index) => (
          <li key={index} className="flex mb-4">
            <img src={item.icon} alt={item.name} className="mr-4" />
            <div className="ml-[12px] flex justify-between w-full">
              <span className="font-bold text-[#1D2228] font-pretendard text-[16px]">{item.name}</span>
              <span className="text-gray-500 text-[16px] font-pretendard mr-[24px]">{item.tag}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityRanking;
