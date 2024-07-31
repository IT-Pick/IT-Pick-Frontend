import React from "react";
import tag_right_chev from "../../../assets/images/16x16/tag_ico_right.svg"

const MainCard: React.FC = () =>{
    return (
        <div className="w-[350px] h-[112px] mx-auto mt-[24px] p-[16px] justify-center items-center rounded-[16px] bg-[white] flex flex-col gap-[12px]">
            <header className="w-full flex justify-between items-center">
                <div className="text-[20px] font-[700]">김현주 열애설</div>
                <div className="flex text-[#9EAAB5] text-[14px]">바로가기
                    <img src={tag_right_chev} alt="right chevron" color="0xFF914CE9"/>
                </div>
            </header>
            <div className="text-[14px] text-[#9EAAB5]">
                대한민국의 대학생 김현주(24)씨가 인스타그램에 열애 사실을 고백해 큰 화제가 되고있다.
            </div>
        </div>
    )
}

export default MainCard;