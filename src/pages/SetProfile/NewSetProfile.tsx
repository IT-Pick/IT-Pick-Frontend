import React, { useState, useEffect, useRef } from 'react';
import Inputter from './Keypad';

const NewSetProfile: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [birthdateError, setBirthdateError] = useState(false);
  const birthdateRef = useRef<HTMLInputElement>(null);
  const keypadRef = useRef<HTMLDivElement>(null);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleBirthdateChange = (value: string) => {
    setBirthdate(value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        birthdateRef.current &&
        !birthdateRef.current.contains(event.target as Node) &&
        keypadRef.current &&
        !keypadRef.current.contains(event.target as Node)
      ) {
        setIsKeyboardVisible(false);
        if (birthdate.length !== 8) {
          setBirthdateError(true);
        } else {
          setBirthdateError(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [birthdate]);

  const isFormValid = nickname.length > 0 && birthdate.length === 8;

  return (
    <div className="flex w-[390px] h-[800px] mt-[70px] justify-center min-h-screen mx-auto">
      <div className="w-full max-w-md p-[20px] rounded-lg">
        <h1 className="text-[24px] font-[700] mb-[52px]">
          <div>잇픽에 필요한</div>{' '}
          <span className="text-[#7620E4]">프로필</span>을 설정해주세요.
        </h1>

        <form className="space-y-4">
          <div className="space-y-3 mb-[39px]">
            <label className="text-[16px] text-black font-[700]">닉네임</label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={handleNicknameChange}
              className="w-[352px] h-[54px] pt-[12px] pb-[12px] pl-[20px] text-[18px] text-[black] font-[500] bg-[#F8F9FC] rounded-[8px] focus:outline-none"
              placeholder="닉네임을 입력해주세요 (10자 이하)"
            />
          </div>

          <div className="space-y-3 relative">
            <label className="text-[16px] text-black font-[700]">
              생년월일
            </label>
            <input
              type="text"
              id="birthdate"
              value={birthdate}
              ref={birthdateRef}
              onFocus={() => setIsKeyboardVisible(true)}
              readOnly
              className=" w-[352px] h-[54px] pt-[12px] pb-[12px] pl-[20px] text-[black] font-[500] text-[18px] bg-[#F8F9FC] rounded-[8px] focus:outline-none"
              placeholder="8자리 숫자로 입력해주세요"
            />
            {birthdateError && (
              <span className="text-red-500 text-[14px]">
                생년월일을 확인해주세요.
              </span>
            )}
          </div>

          <button
            type="submit"
            className={`absolute bottom-[100px] w-[352px] h-[48px]  ${
              isFormValid
                ? 'bg-[#7620E4] text-white'
                : 'bg-[#F1E6FF] text-[#7620E4]'
            } text-[16px] font-[700] py-[12px] px-[140px] rounded-[12px] focus:outline-none`}
            disabled={!isFormValid}
          >
            다음으로
          </button>

          {isKeyboardVisible && (
            <div ref={keypadRef}>
              <Inputter value={birthdate} onChange={handleBirthdateChange} />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewSetProfile;