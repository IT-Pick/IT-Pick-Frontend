import React from 'react';

interface CancelButtonProps {
  onClose: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClose }) => {
  return (
    <div className="h-12 justify-start items-start inline-flex">
      <button
        className="w-32 h-12 px-12 py-3 bg-[#f1e6ff] rounded-lg justify-center items-center flex"
        onClick={onClose}
      >
        <div className="text-center text-[#7620e4] text-base font-semibold font-['Pretendard']">
          취소
        </div>
      </button>
    </div>
  );
};

export default CancelButton;
