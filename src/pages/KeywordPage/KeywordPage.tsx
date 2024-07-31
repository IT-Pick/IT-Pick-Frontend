import React from "react";
import Header from "./component/Header";
import MainCard from "./component/MainCard";
import RelatedData from "./component/RelatedData";
import LiveDiscussion from "./component/LiveDiscussion";
// import { useNavigate } from "react-router-dom";
import ico_write from "../../assets/images/etc/ico_write.svg";

const KeywordPage: React.FC = () =>{
    return(
        <div className="w-[390px] mx-auto bg-[#F8F9FC]">
            <Header/>
            <MainCard/>
            <RelatedData/>
            <LiveDiscussion/>
            <button className="fixed bottom-[18px] right-0">
                <img src={ico_write} alt="add discussion icon"/>
            </button>
            
        </div>
    )
}

export default KeywordPage;