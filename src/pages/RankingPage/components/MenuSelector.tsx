import React from 'react';

interface MenuSelectorProps {
  menuType: string;
  setMenuType: (type: string) => void;
}

const MenuSelector: React.FC<MenuSelectorProps> = ({ menuType, setMenuType }) => {
  return (
    <div className="p-4 bg-background flex flex-col ">
      <div className="flex space-x-3 mb-2">
        <button
          className={`px-4 py-2 ${menuType === 'realTime' ? 'text-black font-bold' : 'text-gray-400'}`}
          onClick={() => setMenuType('realTime')}
        >
          실시간
        </button>
        <button
          className={`px-4 py-2 ${menuType === 'daily' ? 'text-black font-bold' : 'text-gray-400'}`}
          onClick={() => setMenuType('daily')}
        >
          일간
        </button>
        <button
          className={`px-4 py-2 ${menuType === 'weekly' ? 'text-black font-bold' : 'text-gray-400'}`}
          onClick={() => setMenuType('weekly')}
        >
          주간
        </button>
      </div>
      <div className="relative w-full flex justify-center">
        <div
        //   className={`absolute ${menuType === 'realTime' ? 'left-0' : menuType === 'daily' ? 'left-1/2 transform -translate-x-1/2' : 'right-0'} bottom-[-8px] bg-purple-500 h-2 w-2 rounded-full`} 
        />
      </div>
    </div>
  );
};

export default MenuSelector;
