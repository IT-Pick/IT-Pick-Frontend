import React, { useState, useCallback } from 'react';

interface InputterProps {
  value: string;
  onChange: (value: string) => void;
}

const Inputter: React.FC<InputterProps> = ({ value, onChange }) => {
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const PASSWORD_MAX_LENGTH = 8;

  // 키보드 숫자 배열
  const [displayValue, setDisplayValue] = useState(value);

  const handlePasswordChange = useCallback(
    (num: string) => {
      if (displayValue.length === PASSWORD_MAX_LENGTH) {
        return;
      }
      const newValue = displayValue + num;
      setDisplayValue(newValue);
      onChange(newValue);
    },
    [displayValue, onChange]
  );

  const erasePasswordOne = useCallback(() => {
    const newValue = displayValue.slice(
      0,
      displayValue.length === 0 ? 0 : displayValue.length - 1
    );
    setDisplayValue(newValue);
    onChange(newValue);
  }, [displayValue, onChange]);

  const erasePasswordAll = useCallback(() => {
    setDisplayValue('');
    onChange('');
  }, [onChange]);

  return (
    <div className="absolute flex flex-col justify-center items-between bottom-0 left-0 w-[390px] h-[300px] p-4 bg-white">
      <div className="grid grid-cols-3 mb-3 ">
        {nums.slice(0, 9).map((n, i) => (
          <button
            className="text-[24px] font-[700] flex items-center justify-center rounded-lg hover:bg-[#EDF0F3] px-[20px] py-[10px]"
            onClick={(e) => {
              e.preventDefault();
              handlePasswordChange(n);
            }}
            key={i}
          >
            {n}
          </button>
        ))}
        <button
          className="text-[16px] font-[400] flex items-center justify-center rounded-lg hover:bg-[#EDF0F3] px-[20px] py-[10px]"
          onClick={(e) => {
            e.preventDefault();
            erasePasswordAll();
          }}
        >
          전체삭제
        </button>
        <button
          className="text-[24px] font-[700] flex items-center justify-center rounded-lg hover:bg-[#EDF0F3] px-[20px] py-[10px]"
          onClick={(e) => {
            e.preventDefault();
            handlePasswordChange('0');
          }}
        >
          0
        </button>
        <button
          className="text-[24px] font-[700] flex items-center justify-center rounded-lg hover:bg-[#EDF0F3] px-[20px] py-[10px]"
          onClick={(e) => {
            e.preventDefault();
            erasePasswordOne();
          }}
        >
          ←
        </button>
      </div>
    </div>
  );
};

export default Inputter;