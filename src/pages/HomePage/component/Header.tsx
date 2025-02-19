import React from 'react';
import { useNavigate } from 'react-router-dom';
import ico_mypage from "@images/ico_mypage.svg";
import AlarmButton from '@components/AlarmButton';

const Header: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  
  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/my-page');
    } else {
      navigate('/login');
    }
  };

  

  return (
    <header className="flex justify-end pt-[15px] mb-[8px]">
      <div className="flex">
        <AlarmButton isLoggedIn={isLoggedIn}/>
        <img 
          src={ico_mypage} 
          alt="Profile" 
          className="w-6 h-6 mr-[22px] cursor-pointer" 
          onClick={handleProfileClick} />
          
      </div>
    </header>
  );
};

export default Header;
