import React, { useState } from 'react';
import tag_ico_vote_gray from '../../../assets/images/16x16/tag_ico_vote_gray.svg';
import tag_ico_picture_gray from '../../../assets/images/16x16/tag_ico_pic_gray.svg';
import tag_ico_vote_point from '../../../assets/images/16x16/tag_ico_vote.svg';
import tag_ico_picture_point from '../../../assets/images/16x16/tag_ico_pic.svg';

const DebateIconBar: React.FC = () => {
  const [voteActive, setVoteActive] = useState(false);
  const [pictureActive, setPictureActive] = useState(false);

  const handleVoteClick = () => {
    setVoteActive(!voteActive);
  };

  const handlePictureClick = () => {
    setPictureActive(!pictureActive);
  };

  return (
    <div className="w-[390px] ml-5 flex space-x-2">
      <button
        className={`flex justify-start items-center px-4 py-1.5 rounded-full focus:outline-none border ${voteActive ? 'bg-point100 border-point500' : 'bg-background border-gray2'} border-gray2`}
        onClick={handleVoteClick}
      >
        <img src={voteActive ? tag_ico_vote_point : tag_ico_vote_gray} alt="tag_ico_vote" className="mr-2" />
        <span className={`font-pretendard font-medium text-[14px] ${voteActive ? 'text-point500' : 'text-gray3'}`}>투표</span>
      </button>
      <button
        className={`flex justify-start items-center px-4 py-1.5 rounded-full focus:outline-none border ${pictureActive ? 'bg-point100 border-point500' : 'bg-background border-gray2'} border-gray2`}
        onClick={handlePictureClick}
      >
        <img src={pictureActive ? tag_ico_picture_point : tag_ico_picture_gray} alt="tag_ico_picture" className="mr-2" />
        <span className={`font-pretendard font-medium text-[14px] ${pictureActive ? 'text-point500' : 'text-gray3'}`}>사진/동영상</span>
      </button>
    </div>
  );
};

export default DebateIconBar;
