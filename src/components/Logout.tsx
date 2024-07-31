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
        <button
            className="w-[128px] h-[48px] bg-point500 rounded-lg justify-center items-center flex"
            onClick={handleLogout}
        >
            <div className="text-center text-white font-semibold">로그아웃</div>
        </button>
    );
};

export default LogoutButton;