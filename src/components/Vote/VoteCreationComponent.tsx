import React, { useState, useEffect } from 'react';
import VoteCreationForm from './VoteCreationForm';
import VoteResult from './VoteResult';

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

const VoteCreationComponent = () => {
  const [showVoteCreation, setShowVoteCreation] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [createdVote, setCreatedVote] = useState<Vote | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    if (createdVote) {
      const totalVotes = createdVote.options.reduce((sum, option) => sum + option.votes, 0);
      setCreatedVote({ ...createdVote, totalVotes });
    }
  }, [createdVote?.options]);

  const handleVoteCreation = (options: VoteOption[], isMultipleChoice: boolean) => {
    setCreatedVote({
      options,
      isMultipleChoice,
      totalVotes: 0,
    });
    setShowVoteCreation(false);
  };

  const handleVote = (optionId: number) => {
    if (createdVote) {
      const updatedOptions = createdVote.options.map(option =>
        option.id === optionId ? { ...option, votes: option.votes + 1 } : option
      );
      setCreatedVote({ ...createdVote, options: updatedOptions });
    }
  };

  const openImageModal = (imageUrl: string) => {
    setModalImage(imageUrl);
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  return (
    <div className="mt-4">
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="글 내용을 입력하세요..."
        className="w-full p-2 border rounded mb-4"
        rows={4}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowVoteCreation(!showVoteCreation)}
      >
        {showVoteCreation ? '투표 취소' : '투표 만들기'}
      </button>

      {showVoteCreation && <VoteCreationForm onSubmit={handleVoteCreation} />}

      {createdVote && (
        <VoteResult vote={createdVote} onVote={handleVote} openImageModal={openImageModal} />
      )}

      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeImageModal}>
          <div className="max-w-3xl max-h-3xl">
            <img src={modalImage} alt="Enlarged view" className="max-w-full max-h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VoteCreationComponent;
