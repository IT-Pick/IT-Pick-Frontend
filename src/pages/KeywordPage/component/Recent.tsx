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
  {
    image: LiveDiscussion1,
    hits: 1210,
    comments: 123,
    title: "김현주 열애설 어떻게 생각함?",
    link: "/Post1",
  },

];

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num);
};

const DiscussionCard = ({ image, hits, comments, title, link }) => (
  <div className="w-[164px] flex-shrink-0 mb-[20px]">
    <img src={image} alt={title} className="w-[164px] h-[200px] rounded-lg mb-2" />
    <div className="w-[130px] h-6 justify-start items-start gap-2 inline-flex">

      <div className="w-[65px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
        <div className="flex flex-row gap-[4px] text-violet-700 text-xs font-medium font-['Pretendard']"><img src={tag_ico_view} alt='tag_ico_view'/>{formatNumber(hits)}</div>
      </div>

      <div className="w-[57px] px-2 py-1 bg-purple-100 rounded-2xl justify-center items-center gap-1 flex">
        <div className="flex flex-row gap-[4px] text-violet-700 text-xs font-medium font-['Pretendard']"><img src={tag_ico_comment} width={16} height={16} alt='tag_ico_view'/>{formatNumber(comments)}</div>
      </div>

    </div>
    <a href={link} className="block text-[#1D2228] font-pretendard font-bold text-[16px] leading-[22.4px] no-underline mt-2">
      {title}
    </a>
  </div>
);

const RecentDiscussion: React.FC = () => {
  return (
    <div >
      <div className="grid grid-cols-2 gap-x-[12px]">
      {discussions.map((discussion, index) => (
          <DiscussionCard key={index} {...discussion} />
        ))}
      </div>
    </div>
  );
};

export default RecentDiscussion;
