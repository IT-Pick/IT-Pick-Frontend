import React, { useState } from 'react';
import VoteOption from './VoteOption';

interface VoteOption {
  id: number;
  text: string;
  imageUrl?: string;
  votes: number;
}

interface VoteCreationFormProps {
  onSubmit: (options: VoteOption[], isMultipleChoice: boolean) => void;
}

const VoteCreationForm: React.FC<VoteCreationFormProps> = ({ onSubmit }) => {
  const [voteOptions, setVoteOptions] = useState<VoteOption[]>([
    { id: 1, text: '', votes: 0 },
    { id: 2, text: '', votes: 0 },
  ]);
  const [isMultipleChoice, setIsMultipleChoice] = useState(false);

  const addVoteOption = () => {
    const newId = Math.max(...voteOptions.map(option => option.id), 0) + 1;
    setVoteOptions([...voteOptions, { id: newId, text: '', votes: 0 }]);
  };

  const removeVoteOption = (id: number) => {
    if (voteOptions.length > 2) {
      setVoteOptions(voteOptions.filter(option => option.id !== id));
    }
  };

  const handleOptionChange = (id: number, text: string) => {
    setVoteOptions(voteOptions.map(option =>
      option.id === id ? { ...option, text } : option
    ));
  };

  const handleImageUpload = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVoteOptions(voteOptions.map(option =>
          option.id === id ? { ...option, imageUrl: reader.result as string } : option
        ));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onSubmit(voteOptions, isMultipleChoice);
  };

  return (
    <div className="mt-4 p-4 border rounded">
      <h3 className="text-lg font-semibold mb-2">투표 옵션</h3>
      {voteOptions.map((option, index) => (
        <VoteOption
          key={option.id}
          option={option}
          handleOptionChange={handleOptionChange}
          handleImageUpload={handleImageUpload}
          removeVoteOption={removeVoteOption}
          showRemoveButton={voteOptions.length > 2}
        />
      ))}
      <button
        onClick={addVoteOption}
        className="mt-2 text-blue-500 hover:text-blue-700"
      >
        + 항목 추가
      </button>
      <div className="mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isMultipleChoice}
            onChange={(e) => setIsMultipleChoice(e.target.checked)}
            className="mr-2"
          />
          복수 선택 가능
        </label>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        투표 생성
      </button>
    </div>
  );
};

export default VoteCreationForm;
