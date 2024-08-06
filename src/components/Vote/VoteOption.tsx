import React from 'react';
import emptyPhoto from '@images/ico_empty_photo';

interface VoteOptionProps {
  option: {
    id: number;
    text: string;
    imageUrl?: string;
    votes: number;
  };
  handleOptionChange: (id: number, text: string) => void;
  handleImageUpload: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  removeVoteOption: (id: number) => void;
  showRemoveButton: boolean;
}

const VoteOption: React.FC<VoteOptionProps> = ({
  option,
  handleOptionChange,
  handleImageUpload,
  removeVoteOption,
  showRemoveButton,
}) => (
  <div className="flex items-center mb-2 bg-white p-2 rounded shadow-sm">
    <input
      type="text"
      value={option.text}
      onChange={(e) => handleOptionChange(option.id, e.target.value)}
      placeholder="항목 입력"
      className="border rounded px-2 py-1 flex-grow mr-2"
    />
    <label className="ml-2 cursor-pointer">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(option.id, e)}
        className="hidden"
      />
      <span className="text-gray-500 hover:text-gray-700">
        <img 
          src={option.imageUrl || emptyPhoto} 
          alt="이미지" 
          className="w-10 h-10 object-cover rounded"
        />
      </span>
    </label>
    {showRemoveButton && (
      <button
        onClick={() => removeVoteOption(option.id)}
        className="ml-2 text-red-500 hover:text-red-700"
      >
        삭제
      </button>
    )}
  </div>
);

export default VoteOption;
