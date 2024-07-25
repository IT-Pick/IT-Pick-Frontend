import React, { useState } from 'react';
import hideIcon from '../../assets/images/ic_icon_hide.svg';
import showIcon from '../../assets/images/ic_icon_show.svg';

const PwdChangePage: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
    setIsPasswordValid(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password));
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleToggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const isFormValid = isPasswordValid && password === confirmPassword;

  return (
    <div className="w-[390px] mx-auto pt-[72px]">
      <h1 className="text-2xl font-pretendard font-bold ml-6">
        <span className="text-black">비밀번호 변경</span>
      </h1>
      <div className="mt-14 mb-4">
        <label className="block font-pretendard font-bold text-[16px] text-black ml-8">현재 비밀번호</label>
        <div className="relative mx-5 mt-2">
          <input
            type={showCurrentPassword ? 'text' : 'password'}
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            placeholder="현재 비밀번호를 입력해주세요"
            className="w-full h-[54px] pt-[12px] pb-[12px] pl-[20px] bg-gray1 rounded-[8px] focus:outline-none text-black placeholder-gray3 text-[18px] font-pretendard font-medium"
          />
          <button
            type="button"
            onClick={handleToggleCurrentPasswordVisibility}
            className="absolute inset-y-0 right-0 px-[22px] flex items-center"
          >
            <img src={showCurrentPassword ? showIcon : hideIcon} alt="toggle password visibility" />
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-pretendard font-bold text-[16px] text-black ml-8 mt-[39px]">비밀번호</label>
        <div className="relative mx-5 mt-2">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            className="w-full h-[54px] pt-[12px] pb-[12px] pl-[20px] bg-gray1 rounded-[8px] focus:outline-none text-black placeholder-gray3 text-[18px] font-pretendard font-medium"
          />
          <button
            type="button"
            onClick={handleTogglePasswordVisibility}
            className="absolute inset-y-0 right-0 px-[22px] flex items-center"
          >
            <img src={showPassword ? showIcon : hideIcon} alt="toggle password visibility" />
          </button>
        </div>
        {!isPasswordValid && password.length > 0 && (
          <p className="text-[12px] text-errorpoint font-pretendard font-medium mt-1 ml-8">영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요.</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-pretendard font-bold text-[16px] text-black ml-8 mt-[39px]">비밀번호 확인</label>
        <div className="relative mx-5 mt-2">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="비밀번호를 다시 입력해주세요"
            className="w-full h-[54px] pt-[12px] pb-[12px] pl-[20px] bg-gray1 rounded-[8px] focus:outline-none text-black placeholder-gray3 text-[18px] font-pretendard font-medium"
          />
          <button
            type="button"
            onClick={handleToggleConfirmPasswordVisibility}
            className="absolute inset-y-0 right-0 px-[22px] flex items-center"
          >
            <img src={showConfirmPassword ? showIcon : hideIcon} alt="toggle password visibility check"/>
          </button>
        </div>
        {confirmPassword.length > 0 && password !== confirmPassword && (
          <p className="text-[12px] text-errorpoint font-pretendard font-medium mt-1 ml-8">비밀번호가 일치하지 않습니다.</p>
        )}
      </div>
      <div className="mx-5 mt-[71px] mb-4">
        <button
          className={`w-full h-[48px] py-2 rounded flex items-center justify-center font-pretendard font-bold text-[16px] text-white ${isFormValid ? 'bg-point500' : 'bg-gray2'}`}
          disabled={!isFormValid}
          style={{ border: 'none', padding: 0, borderRadius: '12px' }}
        >변경하기
        </button>
      </div>
    </div>
  );
};

export default PwdChangePage;
