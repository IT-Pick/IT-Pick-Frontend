import React from 'react';
import ico_search from "../../../assets/images/ico_search.svg";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => (
  <div className="w-[342px] relative ml-[24px] mr-[24px]">
    <input 
      type="text" 
      placeholder={placeholder}
      className="pl-4 pr-12 py-2 w-full rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray2 font-pretendard font-normal text-[16px]" 
    />
    <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
      <img src={ico_search} alt="Search Icon" className="w-5 h-5" />
    </button>
  </div>
);

export default SearchBar;
