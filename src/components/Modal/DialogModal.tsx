import React from 'react';
import Modal from 'react-modal';
import ActionButton from '../ActionButton';

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
    backgroundColor: 'rgba(29, 34, 40, 0.32)',
    backdropFilter: 'blur(4px)'
  }
};

interface CommonModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
  icon: string;
  title: string | React.ReactNode;
  message: string | React.ReactNode;
  confirmText: string;
  contentLabel: string;
}

const DialogModal: React.FC<CommonModalProps> = ({
  isOpen,
  onRequestClose,
  onConfirm,
  icon,
  title,
  message,
  confirmText,
  contentLabel
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel={contentLabel}
      className="flex flex-col items-center bg-[#ffffff] rounded-[24px] shadow-lg"
    >
      <img src={icon} alt="modal_icon" className="w-[52px] h-[52px] mt-[20px]" />
      <div className="text-[#1d2228] text-lg font-bold mt-[12px]">{title}</div>
      <div className="w-[160px] h-[32px] text-[#464f59] text-center text-[14px]">{message}</div>
      <div className="flex justify-center mt-[15px] gap-4">
        <ActionButton
          text="취소"
          onClick={onRequestClose}
          bgColor="bg-[#f1e6ff]"
          textColor="text-[#7620e4]"
          aria-label="모달 창 상자 닫기"
        />
        <ActionButton
          text={confirmText}
          onClick={onConfirm}
          bgColor="bg-point500"
          textColor="text-white"
        />
      </div>
    </Modal>
  );
};

export default DialogModal;