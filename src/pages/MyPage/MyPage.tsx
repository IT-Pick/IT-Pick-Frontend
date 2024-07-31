import React, { useState } from 'react';
import Modal from 'react-modal';
import alarm from '../../assets/images/ic_alarm.svg';
import profile from '../../assets/images/ic_profile.svg';
import { useNavigate } from 'react-router-dom';
import CancelButton from '../../components/Cancel';
import LogoutButton from '../../components/Logout';
import logout from '../../assets/images/etc/ico_logout.svg';

const customStyles = {
  overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};

const MyPage: React.FC = () => {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleProfileEditClick = () => {
      navigate('/profile-edit');
    };
  
    const handleLogoutClick = () => {
      setModalIsOpen(true); // 모달 열기
    };

    const confirmLogout = () => {
      // 로그아웃 로직 추가해야 함
      navigate('/');
    };
  
    const handleDebateClick = () => {
      navigate('/debate');
    };
  
    const handleParticipatedDebatesClick = () => {
      navigate('/participated-debates');
    };
  
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
                    <button className="bg-point500 text-[16px] text-white font-pretendard font-semibold px-12 py-3 rounded-xl cursor-pointer" onClick={handleProfileEditClick}>프로필 편집</button>
                    <button className="bg-point100 text-[16px] text-point500 font-pretendard font-semibold px-12 py-3 rounded-xl cursor-pointer" onClick={handleLogoutClick}>로그아웃</button> 
                </div>
            </div>
            <div className="w-full h-3 bg-gray1 mt-8"></div>
            <div className="w-full">
                <div className="ml-6 my-2">
                    <h3 className="text-[16px] text-black font-pretendard font-bold py-3">히스토리</h3>
                    <p className="text-[16px] text-black font-pretendard font-normal py-3 cursor-pointer" onClick={handleDebateClick}>내가 만든 토론</p> 
                    <p className="text-[16px] text-black font-pretendard font-normal py-3 cursor-pointer" onClick={handleParticipatedDebatesClick}>내가 참여한 토론</p>  
                </div>
                <div className="w-full h-0.5 bg-gray1"></div>
                <div className="ml-6 mt-2">
                    <p className="text-[16px] text-black font-pretendard font-bold py-3">공지사항</p>
                    <p className="text-[16px] text-black font-pretendard font-normal py-3">자주 묻는 질문</p>
                    <p className="text-[16px] text-black font-pretendard font-normal py-3">약관 및 정책</p>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Logout Confirmation"
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            >
              <img src={logout} alt="logout_icon" className="w-16 h-16" />
                <h2 className="text-[#1d2228] text-lg font-bold mt-[12px]">로그아웃 하시겠어요?</h2>
                <div className="w-40 h-8 text-[#464f59] text-center text-sm font-medium font-['Pretendard']">나중에 언제든지 다시 로그인하실 수 있어요.</div>
                <div className="flex justify-center mt-4 gap-4">
                  <CancelButton onClose={() => setModalIsOpen(false)} />
                  <LogoutButton onClose={() => confirmLogout()} />
                </div>
            </Modal>
        </div>
    );
};

export default MyPage;
