import React, { useState, useMemo } from 'react';
import InputField from './components/InputField';
import Checkbox from './components/Checkbox';
import { validateEmail, validatePassword } from './utils/validation';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [agreeToMarketing, setAgreeToMarketing] = useState(false);

  const isEmailValid = useMemo(() => validateEmail(email), [email]);
  const isPasswordValid = useMemo(() => validatePassword(password), [password]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const isFormValid = isEmailValid && isPasswordValid && password === confirmPassword && agreeToTerms;

  return (
    <div className="w-[390px] mx-auto pt-[72px]">
      <h1 className="text-2xl font-pretendard font-bold ml-6">
        <span className="text-point500">회원가입</span>을 위한<p>정보를 입력해주세요.</p>
      </h1>
      <div className="mt-9 mb-4">
        <label className="block font-pretendard font-bold text-[16px] text-black ml-8">이메일</label>
        <InputField
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="이메일을 입력해주세요"
          isValid={isEmailValid}
          errorMessage="이메일 주소를 정확하게 입력해주세요."
          showValidationButton={true}
        />
      </div>
      <div className="mb-4">
        <label className="block font-pretendard font-bold text-[16px] text-black ml-8 mt-[39px]">비밀번호</label>
        <InputField
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          isValid={isPasswordValid}
          errorMessage="영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요."
          showToggle={true}
          onToggle={() => setShowPassword(!showPassword)}
          isToggled={showPassword}
        />
      </div>
      <div className="mb-4">
        <label className="block font-pretendard font-bold text-[16px] text-black ml-8 mt-[39px]">비밀번호 확인</label>
        <InputField
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="비밀번호를 다시 입력해주세요"
          isValid={confirmPassword.length === 0 || password === confirmPassword}
          errorMessage="비밀번호가 일치하지 않습니다."
          showToggle={true}
          onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
          isToggled={showConfirmPassword}
        />
      </div>
      <div>
        <div className="flex items-center justify-between mb-4 mt-[53px] ml-[26px]">
          <Checkbox
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
            label="[필수] 만 14세 이상이며 모두 동의합니다."
          />
          <button 
            type="button"
            className="text-[14px] text-gray3 font-pretendard font-medium underline ml-2 mr-[22px]"
          >
            내용 보기
          </button>
        </div>
        <div className="flex items-center justify-between mb-4 mt-[20px] ml-[26px]">
          <Checkbox
            checked={agreeToMarketing}
            onChange={() => setAgreeToMarketing(!agreeToMarketing)}
            label="[선택] 광고성 정보 수신에 모두 동의합니다."
          />
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
        >가입하기
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
