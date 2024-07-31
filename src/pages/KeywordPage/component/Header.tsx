import React from "react";
import tag_right_chev from "../../../assets/images/16x16/tag_ico_right.svg"
const Header: React.FC = () =>{
    return (
        <header className="w-full flex justify-between items-center py-[16px] px-[24px] bg-[white]">
                <h1 className="text-[20px] text-black font-pretendard font-bold leading-[28px]">나무위키</h1>
                <div className="text-[#914CE9] text-[14px] font-[500] cursor-pointer flex">
                    랭킹보기
                    <img src={tag_right_chev} alt="right chevron" color="0xFF914CE9"/>
                </div>
            </header>
    )
}

export default Header;