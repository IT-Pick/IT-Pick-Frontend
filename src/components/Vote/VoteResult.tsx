import React from 'react';

interface VoteOption {
  id: number;
  text: string;
  imageUrl?: string;
  votes: number;
}

interface Vote {
  options: VoteOption[];
  isMultipleChoice: boolean;
  totalVotes: number;
}

interface VoteResultProps {
  vote: Vote;
  onVote: (optionId: number) => void;
  openImageModal: (imageUrl: string) => void;
}

const VoteResult: React.FC<VoteResultProps> = ({ vote, onVote, openImageModal }) => {
  return (
    <div className="mt-4 p-4 border rounded">
      <h3 className="text-lg font-semibold mb-2">투표</h3>
      {vote.options.map((option) => (
        <div key={option.id} className="mb-4">
          <button
            onClick={() => onVote(option.id)}
            className="w-full text-left p-2 border rounded hover:bg-gray-100"
          >
            {option.text}
          </button>
          {option.imageUrl && (
            <img
              src={option.imageUrl}
              alt={option.text}
              className="mt-2 max-w-full h-auto cursor-pointer"
              onClick={() => openImageModal(option.imageUrl!)}
            />
          )}
          <div className="mt-2">
            <div className="bg-gray-200 h-4 rounded-full">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${(option.votes / vote.totalVotes) * 100 || 0}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {option.votes} 표 ({((option.votes / vote.totalVotes) * 100 || 0).toFixed(1)}%)
            </p>
          </div>
        </div>
      ))}
      <p className="mt-2 text-sm text-gray-600">
        총 투표 수: {vote.totalVotes} | 
        {vote.isMultipleChoice ? '복수 선택 가능' : '단일 선택만 가능'}
      </p>
    </div>
  );
};

export default VoteResult;
