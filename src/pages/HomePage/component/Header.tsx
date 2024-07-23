import React from 'react';
import { useNavigate } from 'react-router-dom';
import ico_alarm from "../../../assets/images/ico_alarm.svg";
import ico_mypage from "../../../assets/images/ico_mypage.svg";

const Header: React.FC = () => {
  const navigate = useNavigate();
  // 여기에 실제 로그인 상태를 확인하는 로직을 추가해야 함
  // const isLoggedIn = false; 
  const isLoggedIn = true;


  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/signup');
    } else {
      navigate('/my-page');
    }
  };

  return (
    <header className="flex justify-end p-4">
      <div className="flex space-x-[32px]">
        <img src={ico_alarm} alt="Notifications" className="w-6 h-6" />
        <img src={ico_mypage} alt="Profile" className="w-6 h-6 mr-[22px] cursor-pointer" onClick={handleProfileClick} />
      </div>
    </header>
  );
};

export default Header;
