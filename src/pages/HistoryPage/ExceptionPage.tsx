import React from "react";

interface ExceptionType {
  id: number;
  title: string;
  context: string;
  text: string;
}

const Exception: ExceptionType[] = [
  { id: 1, title: "내가 만든 토론", context: "아직 만든 토론이 없어요", text: "잇픽에서 토론을 만들고\n다른 유저들과 의견을 공유해 보세요!" },
  { id: 2, title: "내가 참여한 토론", context: "참여한 토론이 없어요", text: "토론에 참여해\n다른 유저들과 의견을 공유해 보세요!" },
  { id: 3, title: "알림", context: "전달된 알림이 없어요", text: "잇픽에서 활동하고 알림을 받아보세요." }
];

interface NoDebateProps {
  id: number;
}

const ExceptionPage: React.FC<NoDebateProps> = ({ id }) => {
  const exception = Exception.find((item) => item.id === id);

  return (
    <div className=" w-[390px] h-[800px] mx-auto flex flex-col">
      <header className="w-full flex justify-between items-center py-4">
        <h1 className="text-[20px] text-black font-pretendard font-bold leading-[28px] ml-6">{exception.title}</h1>
      </header>
      <div className="bg-[#F8F9FC] flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center gap-[8px] p-4">
          <div className="font-pretendard font-[700] text-[24px] text-[#7620E4]">
            {exception.context}
          </div>
          <div className="font-pretendard font-[400] text-[16px] text-[#9EAAB5] whitespace-pre-line">
            {exception.text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExceptionPage;
