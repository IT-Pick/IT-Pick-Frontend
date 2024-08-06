import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NonVisibility from '../../assets/images/non_visibility.svg';
import Visibility from '../../assets/images/visibility.svg';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

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
        setPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const isFormValid = email.length > 0 && password.length > 0;

    return (
        <div className="bg-[#F8F9FC] flex w-[390px] h-[800px] mt-[70px] justify-center min-h-screen mx-auto">
            <div className="w-auto max-w-md p-8 rounded-lg">
                <h1 className="text-[24px] font-[700] mb-[52px]">
                    <div>안녕하세요 :)</div>
                    <span className="text-[#7620E4]">잇픽</span>
                    입니다.
                </h1>
                <form className="space-y-4">
                    <div className="space-y-3 relative">
                        <label htmlFor="email" className="text-[16px] text-black font-[700]">
                            이메일
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-[352px] h-[54px] pt-[12px] pb-[12px] pl-[20px] text-[18px] bg-[#EDF0F3] rounded-[8px] focus:outline-none text-[black] font-[500]"
                            placeholder="이메일을 입력해주세요"
                        />
                        {!isEmailValid && email.length > 0 && (
                            <p className="text-[12px] text-errorpoint font-pretendard font-medium mt-1 ml-2">
                                이메일 주소를 정확하게 입력해주세요.
                            </p>
                        )}
                    </div>
                    <div className="space-y-3 relative">
                        <label htmlFor="password" className="text-[16px] text-black font-[700]">
                            비밀번호
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-[352px] h-[54px] pt-[12px] pb-[12px] pl-[20px] text-[18px] bg-[#EDF0F3] rounded-[8px] focus:outline-none text-[black] font-[500]"
                            placeholder="비밀번호를 입력해주세요"
                        />
                        <button
                            type="button"
                            onClick={handleTogglePasswordVisibility}
                            className="absolute inset-y-0 right-0 pt-[25px] flex items-center text-gray-500"
                        >
                            <img src={showPassword ? Visibility : NonVisibility} alt="toggle password visibility" />
                        </button>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={`mt-[70px] w-[352px] h-[48px] ${isFormValid ? 'bg-[#7620E4] text-white' : 'bg-[#F1E6FF] text-[#7620E4]'} font-[700] py-[12px] px-[140px] rounded-md focus:outline-none`}
                            disabled={!isFormValid}
                        >
                            로그인
                        </button>
                    </div>
                </form>
                <div className="w-[350px] flex justify-around items-center text-[14px] font-[500] text-[#9EAAB5]">
                    <Link to="/signup" className="hover:underline px-[24px] py-[12px]">
                        회원가입
                    </Link>
                    <Link to="/find-id" className="hover:underline px-[24px] py-[12px]">
                        아이디 찾기
                    </Link>
                    <Link to="/find-password" className="hover:underline px-[24px] py-[12px]">
                        비밀번호 찾기
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
