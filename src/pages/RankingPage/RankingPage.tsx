import React, { useEffect } from 'react';
import CategorySlider from './components/CategorySlider';
import TrendList from './components/TrendList';
import { useTrendStore } from '../../store/trendStore';

const RankingPage: React.FC = () => {
  const { menuType, setMenuType, date, setDate, fetchTrends } = useTrendStore();

  useEffect(() => {
    fetchTrends();
  }, [menuType, date]);

  const handleDateChange = (direction: 'prev' | 'next') => {
    const currentDate = new Date(date);
    if (menuType === 'daily') {
      currentDate.setDate(currentDate.getDate() + (direction === 'prev' ? -1 : 1));
    } else if (menuType === 'weekly') {
      currentDate.setDate(currentDate.getDate() + (direction === 'prev' ? -7 : 7));
    }
    setDate(currentDate.toISOString().split('T')[0]);
  };

  return (
    <div className="bg-background w-[390px] mx-auto">
      <header className="p-4 bg-gray-100 flex justify-between">
        <button
          className={`px-4 py-2 ${menuType === 'realTime' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded`}
          onClick={() => setMenuType('realTime')}
        >
          실시간
        </button>
        <button
          className={`px-4 py-2 ${menuType === 'daily' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded`}
          onClick={() => setMenuType('daily')}
        >
          일간
        </button>
        <button
          className={`px-4 py-2 ${menuType === 'weekly' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded`}
          onClick={() => setMenuType('weekly')}
        >
          주간
        </button>
      </header>
      <CategorySlider />
      {menuType !== 'realTime' && (
        <div className="flex justify-between items-center my-4">
          <button onClick={() => handleDateChange('prev')}>&lt;</button>
          <span>{menuType === 'daily' ? date : `2024.${date}`}</span>
          <button onClick={() => handleDateChange('next')}>&gt;</button>
        </div>
      )}
      <main className="container mx-auto p-4">
        <TrendList />
      </main>
    </div>
  );
};

export default RankingPage;
