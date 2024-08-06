import React from 'react';

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
  <div className="flex items-center mb-2">
    <input
      type="text"
      value={option.text}
      onChange={(e) => handleOptionChange(option.id, e.target.value)}
      placeholder={`옵션 ${option.id}`}
      className="border rounded px-2 py-1 flex-grow"
    />
    <label className="ml-2 cursor-pointer">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(option.id, e)}
        className="hidden"
      />
      <span className="text-blue-500">이미지 추가</span>
    </label>
    {showRemoveButton && (
      <button
        onClick={() => removeVoteOption(option.id)}
        className="ml-2 text-red-500"
      >
        삭제
      </button>
    )}
  </div>
);

export default VoteOption;
