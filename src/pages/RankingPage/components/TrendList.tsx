import React from 'react';
import TrendItem from './TrendItem';
import { useTrendStore } from '../../../store/trendStore';
import { Link } from 'react-router-dom';

const TrendList: React.FC = () => {
  const { trends } = useTrendStore();

  return (
    <div>
      <Link to='/keyword'>{trends.map((trend, index) => (
        <TrendItem key={index} rank={trend.rank} name={trend.name} tags={trend.tags} />
      ))}</Link>
      
    </div>
  );
};

export default TrendList;
