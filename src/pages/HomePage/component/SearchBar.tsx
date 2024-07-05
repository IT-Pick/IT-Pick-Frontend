import React from 'react';
import ico_search from "../../../assets/images/ico_search.svg";
import ico_itpick_logo from "../../../assets/images/ico_itpick_logo.svg";

const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gray-100 pt-10">
      <div className="mb-4 flex items-center">
        <img src={ico_itpick_logo} alt="Logo Icon" className="w-12 h-12 mr-4" />
        <div style={{ color: '#2E333B', fontFamily: 'Pretendard', fontSize: '20px', fontWeight: 700 }}>
          <span style={{ display: 'block' }}>현주님,</span>
          <span style={{ display: 'block' }}>
            오늘의 <span style={{ color: 'var(--Color-Point500, #7620E4)', fontFamily: 'Pretendard', fontSize: '20px', fontWeight: 700 }}>연예</span> 소식을 확인해보세요!
          </span>
        </div>
      </div>

      <div className="relative mt-4">
        <input 
          type="text" 
          placeholder="김현주 열애설" 
          className="pl-4 pr-12 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" 
        />
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <img src={ico_search} alt="Search Icon" className="w-5 h-5 text-gray-400" />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
