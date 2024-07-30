import React from 'react';
import DiscussionCard from './DiscussionCard';

interface DiscussionCardProps {
  image: string;
  hits: number;
  comments: number | null;
  title: string;
  link: string;
}

const RecentDiscussions: React.FC<{ discussions: DiscussionCardProps[] }> = ({ discussions }) => (
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
);

export default RecentDiscussions;
