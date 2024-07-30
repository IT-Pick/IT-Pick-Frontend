import React from 'react';
import errorIcon from '../../assets/images/ico_error.svg';

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={errorIcon} alt="Error Icon" className="w-24 h-24 mt-[174px] mb-12" />
      <h1 className="text-[24px] font-pretendard font-bold text-purple-600 mb-2">일시적인 오류입니다</h1>
      <p className="text-[16px] font-pretendard text-gray3">잠시 후에 다시 시도해 주세요.</p>
      <div className="w-[390px] mx-5 mt-[184px]">
        <button
          className={`w-full h-[48px] py-2 rounded flex items-center justify-center font-pretendard font-bold text-[16px] text-white bg-point500`}
          style={{ border: 'none', padding: 0, borderRadius: '12px' }}
        >
          다시 시도하기
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
