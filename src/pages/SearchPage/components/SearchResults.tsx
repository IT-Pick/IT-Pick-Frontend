import React from 'react';
import SearchResultItem from './SearchResultItem';

interface SearchResultsProps {
  results: { title: string, sources: string[] }[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="mt-4">
      {results.map((result, index) => (
        <SearchResultItem key={index} title={result.title} sources={result.sources} />
      ))}
    </div>
  );
};

export default SearchResults;
