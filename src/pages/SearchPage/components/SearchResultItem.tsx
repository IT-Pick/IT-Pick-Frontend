import React from 'react';

interface SearchResultItemProps {
  title: string;
  sources: string[];
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ title, sources }) => {
  return (
    <div className="py-2">
      <div className="text-[16px] font-medium">{title}</div>
      <div className="flex space-x-2 mt-1">
        {sources.map((source, index) => (
          <span key={index} className="bg-point100 text-point500 px-2 py-1 rounded-full text-[12px]">
            {source}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultItem;
