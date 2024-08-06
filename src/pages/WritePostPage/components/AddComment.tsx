import React, { useState } from "react";
import send from "../../../assets/images/24x24/ico_send.svg";

interface AddCommentProps {
    onAddComment: (text: string) => void;
}

const AddComment: React.FC<AddCommentProps> = ({ onAddComment }) => {
    const [comment, setComment] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (comment.trim()) {
            onAddComment(comment);
            setComment("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-[370px] mx-auto flex justify-around items-center bg-[#EDF0F3] p-1 rounded-[8px]">
            <input
                type="text"
                placeholder="댓글을 입력해주세요"
                value={comment}
                onChange={handleInputChange}
                className="w-[272px] px-4 py-2 rounded-lg bg-[#EDF0F3]"
            />
            <button type="submit" className="text-white rounded-lg">
                <img src={send} alt="submit button"/>
            </button>
        </form>
    );
}

export default AddComment;
