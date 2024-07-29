import React from 'react';
import hideIcon from '../../../assets/images/ic_icon_hide.svg';
import showIcon from '../../../assets/images/ic_icon_show.svg';

interface InputFieldProps {
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isValid?: boolean;
  errorMessage?: string;
  showToggle?: boolean;
  onToggle?: () => void;
  isToggled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  value,
  onChange,
  placeholder,
  isValid,
  errorMessage,
  showToggle,
  onToggle,
  isToggled,
}) => {
  return (
    <div className="mb-4">
      <div className="relative mx-5 mt-2">
        <div className="flex items-center bg-gray1 rounded-[8px]">
          <input
            type={isToggled ? 'text' : type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="flex-grow h-[54px] pt-[12px] pb-[12px] pl-[20px] bg-gray1 rounded-[8px] focus:outline-none text-black placeholder-gray3 text-[18px] font-pretendard font-medium"
            style={{ appearance: 'none', boxShadow: 'none' }}
          />
          {showToggle && (
            <button
              type="button"
              onClick={onToggle}
              className="flex-shrink-0 h-[54px] px-[22px] flex items-center justify-center"
            >
              <img src={isToggled ? showIcon : hideIcon} alt="toggle visibility" />
            </button>
          )}
        </div>
        {isValid === false && value.length > 0 && (
          <p className="text-[12px] text-errorpoint font-pretendard font-medium mt-1 ml-8">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default InputField;
