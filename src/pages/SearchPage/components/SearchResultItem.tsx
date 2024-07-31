import React from 'react';

interface SearchResultItemProps {
  title: string;
  sources: string[];
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ title, sources }) => {
  return (
    <div>
      <div className="h-[84px] mx-6 pt-3 justify-between">
        <h3 className="text-[16px] font-pretendard font-medium">{title}</h3>
        {sources && (
          <div className="flex mt-2">
            {sources.map((source, index) => (
              <span key={index} className="bg-point100 text-point500 text-[12px] font-pretendard font-medium px-2 py-1 rounded-2xl mr-1">
                {source}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="border-b-[2px] mx-3" />
    </div>
  );
};

export default SearchResultItem;
