import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/images/ico_profile_edit.svg';

const MyPage: React.FC = () => {
    const [name, setName] = useState('김잇픽');
    const navigate = useNavigate();

    const handleNameChange = (event: React.FocusEvent<HTMLHeadingElement>) => {
        setName(event.currentTarget.textContent || '김잇픽');
    };

    const handleChangePasswordClick = () => {
        navigate('/change-password');
    };

    return (
        <div className="w-[390px] flex flex-col items-center mx-auto">
            <header className="w-full flex justify-between items-center py-4">
                <h1 className="text-[20px] text-black font-pretendard font-bold leading-[28px] ml-6">프로필 편집</h1>
                <button className="mr-6 font-pretendard font-medium text-[14px] text-point400">완료</button>
            </header>
            <div className="flex flex-col items-center mt-5 text-center">
                <img src={profile} alt="profile_image" className="w-20 h-20" />
                <h2
                    className="w-[352px] h-[54px] pt-[12px] pb-[12px] pl-[20px] mt-6 bg-gray1 rounded-[8px] focus:outline-none text-black placeholder-gray3 text-[18px] font-pretendard font-medium"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={handleNameChange}
                    style={{ textAlign: 'left' }}
                >
                    {name}
                </h2>
            </div>
            <div className="w-full h-3 bg-gray1 mt-8"></div>
            <div className="w-full">
                <div className="ml-6 my-2">
                    <h3 className="text-[16px] text-black font-pretendard font-bold py-3">프로필</h3>
                    <div className="flex justify-between py-3">
                        <p className="text-[16px] text-black font-pretendard font-normal">생년월일</p>
                        <p className="text-[14px] text-gray3 font-pretendard font-normal">20020927</p>
                    </div>
                    <div className="flex justify-between py-3">
                        <p className="text-[16px] text-black font-pretendard font-normal">관심 주제 설정</p>
                        <p className="text-[14px] text-gray3 font-pretendard font-normal">여행, 연예</p>
                    </div>
                </div>
                <div className="w-full h-0.5 bg-gray1"></div>
                <div className="ml-6 mt-2">
                    <p className="text-[16px] text-black font-pretendard font-bold py-3">회원정보</p>
                    <div className="flex justify-between py-3">
                        <p className="text-[16px] text-black font-pretendard font-normal">이메일</p>
                        <p className="text-[14px] text-gray3 font-pretendard font-normal">kimitpick@gmail.com</p>
                    </div>
                    <p
                        className="text-[16px] text-black font-pretendard font-normal py-3 cursor-pointer"
                        onClick={handleChangePasswordClick}
                    >
                        비밀번호 변경
                    </p>
                    <p className="text-[16px] text-errorpoint font-pretendard font-normal py-3">탈퇴하기</p>
                </div>
            </div>
        </div>
    );
};

export default MyPage;
