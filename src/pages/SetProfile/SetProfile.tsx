import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import certifyUnable from '../../assets/images/ic_btn_certify_unable.svg';
import certifyAble from '../../assets/images/ic_btn_certify_able.svg';
import unchecked from '../../assets/images/ic_checkbox_unchecked.svg';
import checked from '../../assets/images/ic_checkbox_checked.svg';
import hideIcon from '../../assets/images/ic_icon_hide.svg';
import showIcon from '../../assets/images/ic_icon_show.svg';

const SetProfile: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [agreeToMarketing, setAgreeToMarketing] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
    setIsPasswordValid(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password));
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleAgreeToTermsChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const handleAgreeToMarketingChange = () => {
    setAgreeToMarketing(!agreeToMarketing);
  };

  const isFormValid = isEmailValid && isPasswordValid && password === confirmPassword && agreeToTerms;

  const handleSignUpClick = () => {
    if (isFormValid) {
      navigate('/set-profile');
    }
  };

  return (
    <div className="w-[390px] mx-auto pt-[72px]">
      <h1 className="text-2xl font-pretendard font-bold ml-6">
        <span className="text-point500">회원가입</span>을 위한<br />정보를 입력해주세요.
      </h1>
      <div className="mt-9 mb-4">
        <label className="block font-pretendard font-bold text-[16px] text-black ml-8">이메일</label>
        <div className="relative mx-5 mt-2">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="이메일을 입력해주세요"
            className="w-full h-[54px] pt-[12px] pb-[12px] pl-[20px] bg-gray1 rounded-[8px] focus:outline-none text-black placeholder-gray3 text-[18px] font-pretendard font-medium"
            style={{ appearance: 'none', boxShadow: 'none' }}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center justify-center"
            style={{ background: 'none', border: 'none', width: '73px', height: '28px', marginTop: '12px', marginBottom: '14px', marginRight: '12px' }}
            disabled={!isEmailValid}
          >
            <img src={isEmailValid ? certifyAble : certifyUnable} alt="email validation" />
          </button>
        </div>
        {!isEmailValid && email.length > 0 && (
          <p className="text-[12px] text-errorpoint font-pretendard font-medium mt-1 ml-8">이메일 주소를 정확하게 입력해주세요.</p>
        )}
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
      <div>
        <div className="flex items-center justify-between mb-4 mt-[53px] ml-[26px]">
          <label className="flex items-center font-pretendard font-medium text-[14px] text-black">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={handleAgreeToTermsChange}
              className="hidden"
            />
            <img
              src={agreeToTerms ? checked : unchecked}
              alt="checkbox"
              onClick={handleAgreeToTermsChange}
              className="cursor-pointer mr-[10px]"
            />
            [필수] 만 14세 이상이며 모두 동의합니다.
          </label>
          <button 
            type="button"
            className="text-[14px] text-gray3 font-pretendard font-medium underline ml-2 mr-[22px]"
          >
            내용 보기
          </button>
        </div>
        <div className="flex items-center justify-between mb-4 mt-[20px] ml-[26px]">
          <label className="flex items-center font-pretendard font-medium text-[14px] text-black">
            <input
              type="checkbox"
              checked={agreeToMarketing}
              onChange={handleAgreeToMarketingChange}
              className="hidden"
            />
            <img
              src={agreeToMarketing ? checked : unchecked}
              alt="checkbox"
              onClick={handleAgreeToMarketingChange}
              className="cursor-pointer mr-[10px]"
            />
            [선택] 광고성 정보 수신에 모두 동의합니다.
            </label>
          <button 
            type="button"
            className="text-[14px] text-gray3 font-pretendard font-medium underline ml-2 mr-[22px]"
          >
            내용 보기
          </button>
        </div>
      </div>
      <div className="mx-5 mt-[30px] mb-4">
        <button
          className={`w-full h-[48px] py-2 rounded flex items-center justify-center font-pretendard font-bold text-[16px] text-white ${isFormValid ? 'bg-point500' : 'bg-gray2'}`}
          disabled={!isFormValid}
          style={{ border: 'none', padding: 0, borderRadius: '12px' }}
          onClick={handleSignUpClick}
        >가입하기
        </button>
      </div>
    </div>
  );
};

export default SetProfile;
