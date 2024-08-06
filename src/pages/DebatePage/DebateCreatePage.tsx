import React, { useState } from 'react';

const DebateCreatePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="w-[390px] mx-auto flex flex-col items-center justify-center">
      <div className="bg-white w-full p-6">
      <div className="flex justify-between items-center mb-10">
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
          className="w-[335px] px-3 font-pretendard font-bold text-[18px] text-gray3 border-none focus:outline-none"
        />
        <hr className="w-[350px] border-t border-gray1 my-[20px]" />
        <textarea
          placeholder="자유롭게 이야기해 보세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-[335px] h-[109px] px-3 font-pretendard font-medium text-[16px] text-gray3 border-none focus:outline-none resize-none"
        />
      </div>
    </div>
  );
};

export default DebateCreatePage;
