import React from "react";
import profile from "../../../assets/images/ico_profile2.svg";
import more from "../../../assets/images/24x24/ico_more.svg";


interface HeaderProps{
    info: {
        userName: string;
        time: number;
        view: number;
    }
}

const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
};

const Header: React.FC <HeaderProps>=({info}) =>{
    return(
        <div className="mx-auto flex justify-between items-center p-[18px]">
            <div className="flex gap-3">
                {/* 사진, 정보 */}
                <img src={profile} alt="profile" width={44} height={44} className="rounded-full" />
                <div className="flex-col">
                    {/* 사용자 닉네임, 시간, 조회수 */}
                    <div className="text-[16px] font-[700]">
                        {info.userName}
                    </div>
                    <div className="flex text-[#9EAAB5] text-[14px] font-[400] gap-3">
                        <div >{info.time}분전</div>
                        <div>|</div>
                        <div>조회수 {formatNumber(info.view)}</div>
                    </div>
                </div>
            </div>
            <button>
                <img src={more} alt="more button" width={24} height={24} />
            </button>
             
        </div>
    )
}
export default Header;