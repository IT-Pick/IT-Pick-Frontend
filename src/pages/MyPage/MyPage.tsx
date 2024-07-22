import React from 'react';
import alarm from '../../assets/images/ic_alarm.svg';
import profile from '../../assets/images/ic_profile.svg';

const MyPage: React.FC = () => {
    return (
        <div className="w-[390px] flex flex-col items-center mx-auto">
            <header className="w-full flex justify-between items-center py-4">
            <h1 className="text-[20px] text-black font-pretendard font-bold leading-[28px] ml-6">마이페이지</h1>
              <button className="mr-6"><img src={alarm} alt="alarm_icon"/></button>
            </header>
            <div className="flex flex-col items-center mt-5 text-center">
                <img src={profile} alt="profile_image" className="w-20 h-20" />
                <h2 className="text-[20px] text-black font-pretendard font-bold leading-[24px] mt-3">김잇픽</h2>
                <p className="text-[14px] text-gray3 mt-1">kimitpick@gmail.com</p>
                <div className="flex gap-8 mt-5">
                    <button className="bg-point500 text-[16px] text-white font-pretendard font-semibold px-12 py-3 rounded-xl">프로필 편집</button>
                    <button className="bg-point100 text-[16px] text-point500 font-pretendard font-semibold px-12 py-3 rounded-xl">로그아웃</button>
                </div>
            </div>
            <div className="w-full h-3 bg-gray1 mt-8"></div>
            <div className="w-full">
                <div className="ml-6 my-2">
                    <h3 className="text-[16px] text-black font-pretendard font-bold py-3">히스토리</h3>
                    <p className="text-[16px] text-black font-pretendard font-normal py-3">내가 만든 토론</p>
                    <p className="text-[16px] text-black font-pretendard font-normal py-3">내가 참여한 토론</p>
                </div>
                <div className="w-full h-0.5 bg-gray1"></div>
                <div className="ml-6 mt-2">
                    <p className="text-[16px] text-black font-pretendard font-bold py-3">공지사항</p>
                    <p className="text-[16px] text-black font-pretendard font-normal py-3">자주 묻는 질문</p>
                    <p className="text-[16px] text-black font-pretendard font-normal py-3">약관 및 정책</p>
                </div>
            </div>
        </div>
    );
};

export default MyPage;
