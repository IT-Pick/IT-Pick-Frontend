import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LogoutButtonProps {}

const LogoutButton: React.FC<LogoutButtonProps> = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 로직 구현 예정
    // 예: auth.logout();
    navigate('/');
  };

  return (
    <div className="h-12 justify-start items-start inline-flex">
        <button
            className="w-32 h-12 px-12 py-3 bg-[#7620e4] rounded-lg justify-center items-center flex"
            onClick={handleLogout}
        >
            <div className="text-center text-white text-base font-semibold font-['Pretendard']">로그아웃</div>
        </button>
    </div>
    );
};

export default LogoutButton;