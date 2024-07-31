import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DeleteAccountButtonProps {}

const DeleteAccountButton: React.FC<DeleteAccountButtonProps> = () => {
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    // 탈퇴 로직 구현 예정
    navigate('/');
  };

  return (
        <button
            className="w-[128px] h-[48px] bg-point500 rounded-lg justify-center items-center flex"
            onClick={handleDeleteAccount}
        >
            <div className="text-center text-white font-semibold">탈퇴하기</div>
        </button>
    );
};

export default DeleteAccountButton;