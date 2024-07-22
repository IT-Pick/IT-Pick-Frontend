import React, { useEffect } from 'react';
import CategorySlider from './components/CategorySlider';
import TrendList from './components/TrendList';
import { useTrendStore } from '../../store/trendStore';
import MenuSelector from './components/MenuSelector';

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
      <MenuSelector menuType={menuType} setMenuType={setMenuType} />
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
