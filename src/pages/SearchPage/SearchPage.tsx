import React, { useState } from 'react';
import ico_search from "../../assets/images/ico_search.svg";
import ico_delete_black from "../../assets/images/16x16/tag_ico_delete_black.svg";
import LiveDiscussion1 from '../../assets/images/LiveDiscussion/LiveDiscussion1.png';
import LiveDiscussion2 from '../../assets/images/LiveDiscussion/LiveDiscussion2.png';
import LiveDiscussion3 from '../../assets/images/LiveDiscussion/LiveDiscussion3.png';

interface DiscussionCardProps {
  image: string;
  hits: number;
  comments: number | null;
  title: string;
  link: string;
}

const discussions: DiscussionCardProps[] = [
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

const DiscussionCard: React.FC<DiscussionCardProps> = ({ image, hits, comments, title, link }) => (
  <div className="font-pretendard">
    <img src={image} alt={title} className="rounded-2xl mb-2" />
    <div className="flex justify-start items-center gap-2 mb-2">
      <div className="bg-point100 rounded-2xl px-2 py-1 flex items-center">
        <span className="text-point500 text-[12px] font-medium">{hits}</span>
      </div>
      {comments !== null && (
        <div className="bg-point100 rounded-2xl px-2 py-1 flex items-center">
          <span className="text-point500 text-[12px] font-medium">{comments}</span>
        </div>
      )}
    </div>
    <a href={link} className="text-black font-bold text-[16px] text-left">
      {title}
    </a>
  </div>
);

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

  const halfLength = Math.ceil(totalPopularSearches.length / 2);
  const firstHalf = totalPopularSearches.slice(0, halfLength);
  const secondHalf = totalPopularSearches.slice(halfLength);

  return (
    <div className="w-[390px] mx-auto pt-[20px]">
      <div className="w-[342px] relative ml-[24px] mr-[24px]">
        <input 
          type="text" 
          placeholder="김현주 열애설"
          className="pl-4 pr-12 py-2 w-full rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray2 font-pretendard font-normal text-[16px]" 
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <img src={ico_search} alt="Search Icon" className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-6 mb-4">
        <div className="flex justify-between items-center mb-2">
          <label className="block font-pretendard font-bold text-[14px] text-gray3 ml-8">최근 검색어</label>
          <button 
            onClick={removeAllTags}
            className="text-gray2 mr-8 underline font-pretendard font-medium text-[14px]"
          >
            지우기
          </button>
        </div>
        <div className="flex flex-wrap gap-2 ml-8 mr-8">
          {tags.map(tag => (
            <div key={tag} className="flex items-center bg-gray1 font-pretendard font-normal text-[14px] text-black px-2 py-1 rounded-full">
              <span>{tag}</span>
              <button onClick={() => removeTag(tag)} className="ml-2">
                <img src={ico_delete_black} alt="delete" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 mb-4">
        <div className="flex justify-between items-center">
          <label className="block font-pretendard font-bold text-[14px] text-gray3 ml-8">통합 인기 검색어 순위</label>
          <span 
            className="text-gray2 mr-8 font-pretendard font-medium text-[14px]">06.13 22:00 기준
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-8 ml-8 mr-8">
          <ul className="mt-3 space-y-4">
            {firstHalf.map((search, index) => (
              <li key={index}>
                <span className="font-pretendard font-bold text-[14px] text-gray3 mr-4">{index + 1}</span>
                <span className="font-pretendard font-semibold text-[14px] text-black">{search}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-3 space-y-4">
            {secondHalf.map((search, index) => (
              <li key={index}>
                <span className="font-pretendard font-bold text-[14px] text-gray3 mr-4">{index + halfLength + 1}</span>
                <span className="font-pretendard font-semibold text-[14px] text-black">{search}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 mb-4">
        <div className="flex justify-between items-center">
          <label className="block font-pretendard font-bold text-[14px] text-gray3 ml-8">최근 본 토론</label>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3 ml-8 mr-8">
          {discussions.map((discussion, index) => (
            <DiscussionCard key={index} {...discussion} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
