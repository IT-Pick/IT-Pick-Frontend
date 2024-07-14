import React from 'react';
import ico_alarm from "../../../assets/images/ico_alarm.svg";
import ico_mypage from "../../../assets/images/ico_mypage.svg";

const Header: React.FC = () => {
  return (
    <header className="flex justify-end p-4">
      <div className="flex space-x-[32px]">
        <img src={ico_alarm} alt="Notifications" className="w-6 h-6" />
        <img src={ico_mypage} alt="Profile" className="w-6 h-6 mr-[22px]" />
      </div>
    </header>
  );
};

export default Header;
