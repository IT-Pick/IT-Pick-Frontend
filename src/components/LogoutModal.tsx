import React from 'react';
import Modal from 'react-modal';
import logout from '../assets/images/etc/ico_logout.svg';
import ActionButton from './ActionButton';

const customStyles = {
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '236px',
    borderRadius: '24px'
  },
  overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(2px)'
  }
};

interface LogoutModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirmLogout: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onRequestClose, onConfirmLogout }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Logout Confirmation"
      className="flex flex-col items-center bg-[#ffffff] rounded-[24px] shadow-lg" 
    >
      <img src={logout} alt="logout_icon" className="w-[52px] h-[52px] mt-[20px]" />
      <div className="text-[#1d2228] text-lg font-bold mt-[12px]">
        로그아웃 하시겠어요?
      </div>
      <div className="w-[160px] h-[32px] text-[#464f59] text-center text-[14px]">
        <p>나중에 언제든지 다시 로그인</p>
        <p>하실 수 있어요.</p>
      </div>
      <div className="flex justify-center mt-[15px] gap-4">
      <ActionButton
          text="취소"
          onClick={onRequestClose}
          bgColor="bg-[#f1e6ff]"
          textColor="text-[#7620e4]"
          aria-label="대화 상자 닫기"
        />
        <ActionButton
          text="로그아웃"
          onClick={onConfirmLogout}
          bgColor="bg-point500"
          textColor="text-white"
        />
      </div>
    </Modal>
  );
};

export default LogoutModal;
