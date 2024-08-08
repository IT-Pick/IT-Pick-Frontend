import React, { useState, useEffect } from 'react';
import DebateIconBar from './components/DebateIconBar';

const DebateCreatePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const initialHeight = window.innerHeight;

  useEffect(() => {
    const handleResize = () => {
      const heightDiff = initialHeight - window.innerHeight;
      if (heightDiff > 150) { 
        setKeyboardVisible(true);
      } else {
        setKeyboardVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initialHeight]);

  return (
    <div className={`w-[390px] mx-auto flex flex-col items-center ${isKeyboardVisible ? 'h-auto' : 'h-screen'} bg-background`}>
      <div className="w-full">
        <div className="flex justify-between items-center mb-6 py-4 px-6 bg-white">
          <div className="font-pretendard font-bold text-lg">
            <span className="text-point500">#김현주 열애설</span>
            <span className="text-black"> 토론 만들기</span>
          </div>
          <button className="text-point400 font-pretendard font-medium text-[14px]">등록하기</button>
        </div>
        <input 
          type="text" 
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[335px] px-5 font-pretendard font-bold text-[18px] text-gray3 border-none focus:outline-none bg-background"
        />
        <hr className="w-[350px] border-t border-gray1 my-[20px]" />
        <textarea
          placeholder="자유롭게 이야기해 보세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-[335px] h-full px-5 font-pretendard font-medium text-[16px] text-gray3 border-none focus:outline-none resize-none bg-background"
        />
      </div>
      <div className={`w-[390px] flex justify-center py-3 bg-white ${isKeyboardVisible ? 'fixed bottom-0' : ''}`}>
        <DebateIconBar />
      </div>
    </div>
  );
};

export default DebateCreatePage;
