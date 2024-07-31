import React from 'react';
import Modal from 'react-modal';
import logout from '../../assets/images/etc/ico_logout.svg';
import CancelButton from '../../components/Cancel';
import LogoutButton from '../../components/Logout';

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
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
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
      <img src={logout} alt="logout_icon" className="w-16 h-16 mt-4" />
      <h2 className="text-[#1d2228] text-lg font-bold mt-[12px]">로그아웃 하시겠어요?</h2>
      <div className="w-40 h-8 text-[#464f59] text-center text-sm mt-2">나중에 언제든지 다시 로그인하실 수 있어요.</div> 
      <div className="flex justify-center mt-4 gap-4">
        <CancelButton onClose={onRequestClose} />
        <LogoutButton onClose={onConfirmLogout} />
      </div>
    </Modal>
  );
};

export default LogoutModal;
