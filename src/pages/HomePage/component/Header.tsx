import React from 'react';
import { useNavigate } from 'react-router-dom';
import ico_mypage from "../../../assets/images/ico_mypage.svg";
import AlarmButton from '../../../components/AlarmButton';

const Header: React.FC = () => {
  const navigate = useNavigate();
  // 여기에 실제 로그인 상태를 확인하는 로직을 추가해야 함
  // const isLoggedIn = false; 
  const isLoggedIn = true;

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/my-page');
    } else {
      navigate('/signup');
    }
  };

  return (
    <header className="flex justify-end mt-[8px] mb-[8px]">
      <div className="flex">
        <AlarmButton />
        <img src={ico_mypage} alt="Profile" className="w-6 h-6 mr-[22px] cursor-pointer" onClick={handleProfileClick} />
      </div>
    </header>
  );
};

export default Header;
