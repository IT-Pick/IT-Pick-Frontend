import React, { useState } from 'react';

const categories = ['통합', '나무위키', '트위터', '다음카페', '커뮤니티'];

const CategorySlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex overflow-x-auto whitespace-nowrap bg-background p-4 mt-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`px-4 py-2 rounded-full cursor-pointer text-sm border ${index === activeIndex ? 'bg-violet-700 text-white' : 'bg-white text-gray-800 border-gray-300'} transition-all duration-300 mx-2`}
          onClick={() => setActiveIndex(index)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategorySlider;
