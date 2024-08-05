import React from 'react';
import { useNavigate } from 'react-router-dom';
import trash from '../../assets/images/etc/ico_trash.svg';
import DialogModal from './DialogModal';

interface DeleteAccountModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirmDeleteAccount: () => Promise<void>;
}

const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({ isOpen, onRequestClose, onConfirmDeleteAccount }) => {
  const navigate = useNavigate();

  const handleConfirm = async () => {
    try { 
      navigate('/'); //현재는 탈퇴 로직이 없으므로 바로 홈으로 이동
      await onConfirmDeleteAccount();
      navigate('/'); // 계정 삭제 후 홈 화면으로 이동
    } catch (error) {
      console.error('계정 삭제 중 오류 발생:', error);
      // 여기에 에러 처리 로직을 추가할 수 있습니다.
      // 예: 사용자에게 에러 메시지 표시
    }

  };

  return (
    <DialogModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onConfirm={handleConfirm}
      icon={trash}
      title={<><span className='inline-block'>김잇픽</span><span className='inline-block'>님과 이별인가요..?</span></>}
      message={<><p>탈퇴 버튼 선택 시, 계정은</p><p>삭제되며 복구되지 않습니다.</p></>}
      confirmText="탈퇴하기"
      contentLabel="DeleteAccount Confirmation"
    />
  );
};
export default DeleteAccountModal;
