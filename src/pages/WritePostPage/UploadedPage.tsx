import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import CommentList from "./components/CommentList";
import AddComment from "./components/AddComment";

const initialInfo = [
    {
        userName: "헤롱헤롱",
        time: 25,
        view: 15554,
        title: "김현주 모쏠이다 아니다?",
        text: "내가 생각했을땐 무조건 모쏠임ㅋㅋ\nㄹㅇ임\n왜냐면 그렇기때문임\n투표ㄲ",
    },
];

const initialComments = [
    { userName: "티끌", time: 5, like: 1, text: "여왕이다. 대한민국의 왕은 현주다.\n현주로 정권을 교체해달라." },
    { userName: "김잇픽", time: 8, like: 10, text: "여왕이다. 대한민국의 왕은 현주다.\n현주로 정권을 교체해달라." },
    { userName: "효지", time: 12, like: 90, text: "여왕이다. 대한민국의 왕은 현주다.\n현주로 정권을 교체해달라." },
];

const UploadedPage: React.FC = () => {
    const [comments, setComments] = useState(initialComments);

    const addComment = (text: string) => {
        const newComment = {
            userName: "김잇픽",
            time: 0, 
            like: 0, 
            text: text,
        };
        setComments([...comments, newComment]);
    };

    const handleLike = (index: number) => {
        const updatedComments = comments.map((comment, i) => 
            i === index ? {...comment, like: comment.like +1} : comment
        );
        setComments(updatedComments);
    }

    return (
        <div className="w-[390px] bg-[#F8F9FC] mx-auto py-4">
            <Header info={initialInfo[0]} />
            <Content info={initialInfo[0]} />
            <CommentList comments={comments} onLike={handleLike}/>
            <AddComment onAddComment={addComment} />
        </div>
    );
}

export default UploadedPage;
