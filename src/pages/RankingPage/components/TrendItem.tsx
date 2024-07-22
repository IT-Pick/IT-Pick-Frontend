import React from 'react';

interface TrendItemProps {
  rank: number;
  name: string;
  tags: string[];
}

const TrendItem: React.FC<TrendItemProps> = ({ rank, name, tags }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <span className="text-lg font-bold">{rank}</span>
        <span className="ml-4 text-lg">{name}</span>
      </div>
      <div className="flex space-x-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 text-sm bg-gray-200 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrendItem;
