import React from "react";

const ChatButton = () => {
  return (
    <button
      className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition focus:outline-none"
    >
      {/* 채팅 아이콘 직접 그리기 (SVG 사용) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M21 15.5a1 1 0 0 1 1 1V22l-3.5-3.5H6A4 4 0 0 1 2 14V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v9.5ZM6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12.5L20 18v-1.5a1 1 0 0 1 1-1V6a2 2 0 0 0-2-2H6Z" />
        <circle cx="8" cy="10" r="1.5" />
        <circle cx="12" cy="10" r="1.5" />
        <circle cx="16" cy="10" r="1.5" />
      </svg>
    </button>
  );
};

export default ChatButton;
