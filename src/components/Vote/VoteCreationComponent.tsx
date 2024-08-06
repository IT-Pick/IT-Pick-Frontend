import React, { useState, useEffect } from 'react';
import VoteCreationForm from './VoteCreationForm';
import VoteResult from './VoteResult';
import icoVote from '@images/16x16/tag-ico-vote.svg'; //ico-vote 입력시 syntax error 발생

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
    <div className="w-[390px] flex flex-col items-center mx-auto">
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="자유롭게 이야기 해보세요."
        className="w-full p-2 border rounded mb-4"
        rows={4}
      />

      <button
       <img src={icoVote} alt="투표 아이콘">
        className="w-[75px] h-[34px] bg-[#f8f9fc] hover:bg-gray2 text-gray3 font-bold border-[1px] border-radius-[40px] border-gray3"
        onClick={() => setShowVoteCreation(!showVoteCreation)}
      >
        {showVoteCreation ? '투표 취소' : '투표'}
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
