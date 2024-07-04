import React from 'react';
import alarm from '../../assets/images/ic_alarm.svg';
import profile from '../../assets/images/profile.svg';

const MyPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center mx-auto">
            <header className="w-full flex justify-between items-center py-4">
            <h1 className="text-[20px] text-black font-pretendard font-bold leading-[28px] text-left ml-6">마이페이지</h1>
              <button className="mr-6"><img src={alarm} alt="alarm_icon"/></button>
            </header>
            <div className="flex flex-col items-center mt-5 text-center">
                <img src={profile} className="w-20 h-20" />
                <h2 className="text-[20px] text-black font-pretendard font-bold leading-[24px] mt-3">김잇픽</h2>
                <p className="text-[14px] text-gray3 mt-1">kimitpick@gmail.com</p>
                <div className="flex gap-8 mt-5">
                    <button className="bg-point500 text-[16px] font-pretendard font-semibold px-12 py-3 text-white rounded-xl">프로필 편집</button>
                    <button className="bg-point100 text-[16px] font-pretendard font-semibold px-12 py-3 text-point500 rounded-xl">로그아웃</button>
                </div>
            </div>
            <div className="w-full mt-10">
                <div className="py-3 ml-6">
                    <h3 className="text-[16px] text-black font-pretendard font-bold my-3">히스토리</h3>
                    <p className="text-[16px] text-black font-pretendard font-normal my-3">내가 만든 토론</p>
                    <p className="text-[16px] text-black font-pretendard font-normal my-3">내가 참여한 토론</p>
                </div>
                <div className="w-full h-0.5 bg-gray1"></div>
                <div className="py-3 ml-6">
                    <h3 className="text-[16px] text-black font-pretendard font-bold my-3">설정</h3>
                    <p className="text-[16px] text-black font-pretendard font-normal my-3">회원정보</p>
                </div>
                <div className="w-full h-0.5 bg-gray1"></div>
                <div className="py-3 ml-6">
                    <p className="text-[16px] text-black font-pretendard font-normal my-3">자주 묻는 질문</p>
                    <p className="text-[16px] text-black font-pretendard font-normal my-3">약관 및 정책</p>
                    <p className="text-[16px] text-errorpoint font-pretendard font-normal my-3">탈퇴하기</p>
                </div>
            </div>
        </div>
    );
};

export default MyPage;
