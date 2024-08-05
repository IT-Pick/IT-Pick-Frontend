import React from 'react';
import logout from '../../assets/images/etc/ico_logout.svg';
import DialogModal from './DialogModal';

interface LogoutModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirmLogout: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onRequestClose, onConfirmLogout }) => {
  return (
    <DialogModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onConfirm={onConfirmLogout}
      icon={logout}
      title="로그아웃 하시겠어요?"
      message={<><p>나중에 언제든지 다시 로그인</p><p>하실 수 있어요.</p></>}
      confirmText="로그아웃"
      contentLabel="Logout Confirmation"
    />
  );
};

export default LogoutModal;
