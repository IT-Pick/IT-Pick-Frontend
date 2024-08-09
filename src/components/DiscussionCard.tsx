import React from 'react';
import tag_ico_view from '@images/16x16/tag_ico_view.svg';
import tag_ico_comment from '@images/16x16/tag_ico_comment.svg';

interface DiscussionCardProps {
  image: string;
  hits: number | null;
  comments: number | null;
  title: string;
  link: string;
}

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num);
};

const DiscussionCard: React.FC<DiscussionCardProps> = ({ image, hits, comments, title, link }) => (
  <div className="font-pretendard">
    <img src={image} alt={title} className="rounded-2xl mb-2" />
    <div className="flex justify-start items-center gap-2 mb-2">
      {hits !== null && (
        <div className="bg-point100 text-point500 rounded-2xl px-2 py-1 gap-[2px] flex items-center font-pretendard font-medium text-[12px]">
        <img src={tag_ico_view} alt="tag_ico_view" /> 
        {formatNumber(hits)}
      </div>
      )}
      {comments !== null && (
        <div className="bg-point100 text-point500 rounded-2xl px-2 py-1 gap-[2px] flex items-center font-pretendard font-medium text-[12px]">
          <img src={tag_ico_comment} alt="tag_ico_comment" /> 
          {formatNumber(comments)}
        </div>
      )}
    </div>
    <a href={link} className="text-black font-bold text-[16px] text-left">
      {title}
    </a>
  </div>
);

export default DiscussionCard;
