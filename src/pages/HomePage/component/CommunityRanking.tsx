import React from 'react';
import namuwiki from '../../../assets/images/CommunityLogo/namuwiki.svg';
import twitter from '../../../assets/images/CommunityLogo/twitter.svg';
import dcinside from '../../../assets/images/CommunityLogo/dcinside.svg';
import naver from '../../../assets/images/CommunityLogo/naver.svg';
import daumcafe from '../../../assets/images/CommunityLogo/daumcafe.svg';

const CommunityRanking: React.FC = () => {
  const rankings = [
    { name: '나무위키', tag: '#김현주_열애설', icon: namuwiki },
    { name: '트위터', tag: '#김현주_연애', icon: twitter },
    { name: '디시인사이드', tag: '#김현주_남자친구', icon: dcinside },
    { name: '네이버', tag: '#김현주_결혼', icon: naver },
    { name: '다음카페', tag: '#김현주_공개연애', icon: daumcafe },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">커뮤니티 별 랭킹</h2>
        <span className="text-gray-500">전체보기 &gt;</span>
      </div>
      <p className="text-gray-500 mb-4">4월 1일 18:00 기준</p>
      <ul>
        {rankings.map((item, index) => (
          <li key={index} className="flex items-center mb-4">
            <img src={item.icon} alt={item.name} className="w-8 h-8 mr-4" />
            <div className="flex-1">
              <p className="font-bold">{item.name}</p>
              <p className="text-gray-500">{item.tag}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityRanking;

