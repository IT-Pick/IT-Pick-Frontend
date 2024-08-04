import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import RecentSearches from './components/RecentSearches';
import PopularSearches from './components/PopularSearches';
import RecentDiscussions from './components/RecentDiscussions';
import SearchResultItem from './components/SearchResultItem';
import ErrorPage from './components/405ErrorPage';
import LiveDiscussion1 from '../../assets/images/LiveDiscussion/LiveDiscussion1.png';
import LiveDiscussion2 from '../../assets/images/LiveDiscussion/LiveDiscussion2.png';
import LiveDiscussion3 from '../../assets/images/LiveDiscussion/LiveDiscussion3.png';

const discussions = [
  {
    image: LiveDiscussion1,
    hits: 1210,
    comments: 2830,
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
    hits: 32,
    comments: 48302,
    title: "현주씨 오늘 저녁 뭐 드셨어요",
    link: "/Post3",
  },
  {
    image: LiveDiscussion1,
    hits: 93021,
    comments: 123,
    title: "뉴진스! 뉴진스!",
    link: "/Post4",
  },
  {
    image: LiveDiscussion2,
    hits: null,
    comments: 594,
    title: "현주씨 오늘 저녁 뭐 드셨어요",
    link: "/Post5",
  },
  {
    image: LiveDiscussion3,
    hits: 145,
    comments: 3048,
    title: "김현주 열애설 어떻게 생각함?",
    link: "/Post6",
  },
];

const initialSearchResults = [
  { title: '김현주 열애설', sources: ['나무위키 1등', '트위터 1등'] },
  { title: '김현주', sources: ['나무위키 2등', '네이버 1등'] },
  { title: '김윤서 차은우', sources: ['네이버 2등', '트위터 2등'] },
  { title: '김현주 결혼', sources: ['줌 1등'] },
  { title: '김윤서 결혼' },
  { title: '김현주 결혼', sources: ['나무위키 1등', '나무위키 1등'] },
  { title: '김윤서 결혼', sources: ['줌 5등', '나무위키 5등'] },
];

const SearchPage: React.FC = () => {
  const [tags, setTags] = useState([
    '김현주',
    '김현주 열애설',
    '김현주 남친',
  ]);

  const [isSearchActive, setIsSearchActive] = useState(false);

  const [searchResults, setSearchResults] = useState(initialSearchResults);

  const [noResults, setNoResults] = useState(false);

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

  const handleSearch = (term: string) => {
    if (term === '') {
      setSearchResults(initialSearchResults);
      setIsSearchActive(false);
      setNoResults(false);
    } else {
      const filteredResults = initialSearchResults.filter(result => result.title.includes(term));
      setSearchResults(filteredResults);
      setIsSearchActive(true);
      setNoResults(filteredResults.length === 0);
    }
  };

  return (
    <div className="w-[390px] mx-auto pt-[20px] bg-background min-h-screen">
      <SearchBar placeholder="김현주 열애설" onSearch={handleSearch} />
      
      {!isSearchActive && !noResults && (
        <>
          <RecentSearches tags={tags} removeTag={removeTag} removeAllTags={removeAllTags} />
          <PopularSearches searches={totalPopularSearches} />
          <RecentDiscussions discussions={discussions} />
        </>
      )}

      {isSearchActive && !noResults && (
        <div>
          {searchResults.map((result, index) => (
            <SearchResultItem key={index} title={result.title} sources={result.sources} />
          ))}
        </div>
      )}

      {noResults && <ErrorPage />}
    </div>
  );
}

export default SearchPage;
