import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecentSearches from './components/RecentSearches';
import PopularSearches from './components/PopularSearches';
import RecentDiscussions from './components/RecentDiscussions';
import LiveDiscussion1 from '../../assets/images/LiveDiscussion/LiveDiscussion1.png';
import LiveDiscussion2 from '../../assets/images/LiveDiscussion/LiveDiscussion2.png';
import LiveDiscussion3 from '../../assets/images/LiveDiscussion/LiveDiscussion3.png';

const discussions = [
  {
    image: LiveDiscussion1,
    hits: 1210,
    comments: 123,
    title: "김현주 열애설 어떻게 생각함?",
    link: "/Post1",
  },
  {
    image: LiveDiscussion2,
    hits: 990,
    comments: null,
    title: "김현주가 아깝다 vs 차은우가 아깝다",
    link: "/Post2",
  },
  {
    image: LiveDiscussion3,
    hits: 1210,
    comments: 123,
    title: "현주씨 오늘 저녁 뭐 드셨어요",
    link: "/Post3",
  },
  {
    image: LiveDiscussion1,
    hits: 1210,
    comments: 123,
    title: "뉴진스! 뉴진스!",
    link: "/Post4",
  },
  {
    image: LiveDiscussion2,
    hits: 1210,
    comments: 123,
    title: "현주씨 오늘 저녁 뭐 드셨어요",
    link: "/Post5",
  },
  {
    image: LiveDiscussion3,
    hits: 1210,
    comments: 123,
    title: "김현주 열애설 어떻게 생각함?",
    link: "/Post6",
  },
];

const SearchPage: React.FC = () => {
  const [tags, setTags] = useState([
    '김현주',
    '김현주 열애설',
    '김현주 남친',
  ]);

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const removeAllTags = () => {
    setTags([]);
  };

  const totalPopularSearches = [
    '김현주',
    '김현주 소속사',
    '김현주 열애설',
    '김현주 남친',
    '김현주',
    '김현주',
    '김현주',
    '김현주',
  ];

  return (
    <div className="w-[390px] mx-auto pt-[20px]">
      <SearchBar placeholder="김현주 열애설" />
      
      <RecentSearches tags={tags} removeTag={removeTag} removeAllTags={removeAllTags} />

      <PopularSearches searches={totalPopularSearches} />

      <RecentDiscussions discussions={discussions} />
    </div>
  );
}

export default SearchPage;
