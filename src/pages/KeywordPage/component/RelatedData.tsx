import React from "react";
import liveDiscussion4 from "../../../assets/images/LiveDiscussion/LiveDiscussion4.png"

const RelatedData:React.FC = () =>{
    return(
        <div className="flex flex-col justify-center mx-[24px] mt-[44px] gap-[12px]">
            <header className="text-[20px] font-[700]">
                관련 자료
            </header>
            <div className="flex justify-between items-center gap-[12px]">
                <img src={liveDiscussion4} alt="relatedData png" className="w-[88px] h-[88px]"/>
                <div>
                    <header className="text-[18px] font-[700]">
                        김현주 충격 열애 고백... 네티즌 '충격'
                    </header>
                    <div className="text-[#464F59] text-[14px] font-[500]">대학생 김현주(24)씨가 인스타그램에 열애 사실을 고백해 큰 화제가 되고있다.</div>
                </div>
            </div>
        </div>
    )
}

export default RelatedData;