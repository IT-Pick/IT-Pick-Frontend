import React from 'react';
import uncheckedImg from '../../../assets/images/ic_checkbox_unchecked.svg';
import checkedImg from '../../../assets/images/ic_checkbox_checked.svg';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center font-pretendard font-medium text-[14px] text-black">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <img
        src={checked ? checkedImg : uncheckedImg}
        alt="checkbox"
        onClick={onChange}
        className="cursor-pointer mr-[10px]"
      />
      {label}
    </label>
  );
};

export default Checkbox;
