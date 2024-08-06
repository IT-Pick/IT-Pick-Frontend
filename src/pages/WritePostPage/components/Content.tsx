import React from "react";

interface ContentProps{
    info: {
        title: string;
        text: string;
    }
}

const Content: React.FC<ContentProps>= ({info}) => {
    return(
    <div className="flex-col mx-auto px-[20px] pb-[30px]">
        <div className="text-[20px] font-[700] mb-[8px]">{info.title}</div>
        <div className="text-[16px] font-[400] whitespace-pre-line leading-snug">{info.text}</div>
    </div>
    )
}

export default Content;