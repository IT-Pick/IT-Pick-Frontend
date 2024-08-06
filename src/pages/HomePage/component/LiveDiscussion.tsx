import React from 'react';
import LiveDiscussion1 from '../../../assets/images/LiveDiscussion/LiveDiscussion1.png';
import LiveDiscussion2 from '../../../assets/images/LiveDiscussion/LiveDiscussion2.png';
import LiveDiscussion3 from '../../../assets/images/LiveDiscussion/LiveDiscussion3.png';
import tag_ico_view from "../../../assets/images/16x16/tag_ico_view.svg";
import tag_ico_comment from "../../../assets/images/16x16/tag_ico_comment.svg";

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
    comments: 45,
    title: "김현주가 아깝다 vs 차은우가 아깝다",
    link: "/Post2",
  },
  {
    image: LiveDiscussion3,
    hits: 990,
    comments: 45,
    title: "김현주가 아깝다 vs 차은우가 아깝다",
    link: "/Post3",
  },
];

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num);
};

const DiscussionCard = ({ image, hits, comments, title, link }) => (
  <div className="w-[164px] h-[284px]">
    <img src={image} alt={title} className="w-full h-[200px] rounded-lg" />
    <div className="justify-start gap-2 inline-flex mt-[8px]">
      <div className="w-[65px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center ">
        <div className="flex flex-row gap-[8px] text-violet-700 text-xs font-medium font-['Pretendard']"><img src={tag_ico_view} alt='tag_ico_view'/>{formatNumber(hits)}</div>
      </div>
      <div className="w-[57px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
        <div className="flex flex-row gap-[4px] text-violet-700 text-xs font-medium font-['Pretendard']"><img src={tag_ico_comment} width={16} height={16} alt='tag_ico_view'/>{formatNumber(comments)}</div>
      </div>
    </div>
    <a href={link} className="block text-black font-bold text-[16px] leading-[22.4px] no-underline mt-[8px]">
      {title}
    </a>
  </div>
);

const LiveDiscussion: React.FC = () => {
  return (
    <div className="mt-[26px] ml-[24px]">
      <div className="flex items-center">
        <span className="text-[#2E333B] font-pretendard text-[20px] font-bold leading-normal">실시간 토론 BEST 3</span>
      </div>
      <div className="flex overflow-x-auto space-x-[12px] mt-[12px]">
      {discussions.map((discussion, index) => (
          <DiscussionCard key={index} {...discussion} />
        ))}
      </div>
    </div>
  );
};

export default LiveDiscussion;
