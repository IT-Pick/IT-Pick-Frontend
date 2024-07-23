import React from 'react';
import TrendItem from './TrendItem';
import { useTrendStore } from '../../../store/trendStore';

const TrendList: React.FC = () => {
  const { trends } = useTrendStore();

  return (
    <div>
      {trends.map((trend, index) => (
        <TrendItem key={index} rank={trend.rank} name={trend.name} tags={trend.tags} />
      ))}
    </div>
  );
};

export default TrendList;
