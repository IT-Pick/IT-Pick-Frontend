import React from "react";
import Comment from "./Comment";

interface CommentListProps {
    comments: {
        userName: string;
        time: number;
        like: number;
        text: string;
    }[];
    onLike: (index: number) => void;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onLike}) => {
    return (
        <div className="flex flex-col border-t-[12px] border-[#EDF0F3] pt-[28px] pb-[42px]">
            <div className="text-[14px] text-[#9EAAB5] ml-[28px] mb-[12px]">댓글 {comments.length}</div>
            {comments.map((comment, index) => (
                <Comment
                    key={index}
                    userName={comment.userName}
                    time={comment.time}
                    text={comment.text}
                    like={comment.like}
                    onLike={() => onLike(index)}
                />
            ))}
        </div>
    );
};

export default CommentList;
