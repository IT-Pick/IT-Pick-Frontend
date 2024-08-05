import React, { useState } from 'react';
import ico_search from "../assets/images/ico_search.svg";

interface SearchBarProps {
  placeholder: string;
  onSearch: (term: string) => void;
  onSearchAll?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch, onSearchAll }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  
  const handleClick = () => {
    if (onSearchAll) {
      handleSearch();
    }
  };
  
  return (
    <div 
      className="w-[342px] relative" 
      onClick={handleClick} 
      style={onSearchAll ? { cursor: 'pointer' } : {}}
    >
      <input 
        type="text" 
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className="pl-4 pr-12 py-2 w-full rounded-full border border-transparent focus:outline-none placeholder-gray2 font-pretendard font-normal text-[16px]" 
      />
      <button onClick={handleSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <img src={ico_search} alt="Search Icon" className="w-5 h-5" />
      </button>
    </div>
  );
}

export default SearchBar;
