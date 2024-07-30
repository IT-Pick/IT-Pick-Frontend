import React from 'react';

interface DiscussionCardProps {
  image: string;
  hits: number;
  comments: number | null;
  title: string;
  link: string;
}

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

export default DiscussionCard;
