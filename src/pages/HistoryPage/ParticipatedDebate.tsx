import React from "react";
import tag_ico_comment from '../../assets/images/16x16/tag_ico_comment.svg'
import tag_ico_view from "../../assets/images/16x16/tag_ico_view.svg"

const myParticipatedDebates = [
    { id: 1, title: '김현주', about: "김현주 열애설", tags: [3025, 123], time: 30 },
    { id: 2, title: '김현주 열애설', about: "김현주 열애설", tags: [123, 18], time: 30 },
    { id: 3, title: '여러분 뉴진스 최애는?', about: "김현주 열애설", tags: [567, 398], time: 30 },
    { id: 4, title: '마라탕 먹고 싶다', about: "김현주 열애설", tags: [123, 290], time: 30 },
    { id: 5, title: '하니도 좋은데', about: "김현주 열애설", tags: [980, 1290], time: 30 },
    { id: 6, title: '저는 해린이요', about: "김현주 열애설", tags: [123], time: 30 },
];

const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
};

const SortingDebates = ({ title, about, tags, time }) => (
    <div className="flex w-[390px] p-4 bg-[#F8F9FC] border-b-[2px] justify-between">
        <div className="flex flex-col items-start mb-4 gap-[4px]">
            <div className="text-center font-[600] text-[16px]">{title}</div>
            <div className="flex gap-[4px]">
                <div className="text-[#9EAAB5] text-[12px] font-[400]">{time}분 전 |</div>
                <div className="text-[#7620E4] text-[12px] font-[400]">#{about}</div>
            </div>
        </div>
        <div className="flex items-center gap-[8px]">
            {tags[0] && (
                <div className="flex items-center gap-[4px] bg-purple-100 rounded-2xl px-2 py-1 text-xs text-violet-700 font-medium">
                    <img src={tag_ico_view} alt="tag_ico_view"/>
                    {formatNumber(tags[0])}
                </div>
            )}
            {tags[1] && (
                <div className="flex items-center gap-[4px] bg-purple-100 rounded-2xl px-2 py-1 text-xs text-violet-700 font-medium">
                    <img src={tag_ico_comment} alt="tag_ico_comment" />
                    {formatNumber(tags[1])}
                </div>
            )}
        </div>
    </div>
);

const ParticipatedDebates: React.FC = () => {
    return (
        <div className="w-[390px] mx-auto">
            <header className="w-full flex justify-between items-center py-4">
                <h1 className="text-[20px] text-black font-pretendard font-bold leading-[28px] ml-6">내가 참여한 토론</h1>
            </header>
            {myParticipatedDebates.map((item) => (
                <SortingDebates key={item.id} {...item} />
            ))}
        </div>
    );
}

export default ParticipatedDebates;