import React from "react";
import Header from "./components/Header";

const info = [
    {userName: "헤롱헤롱", time: 25, view: 15554},
]

const UploadedPage: React.FC = () => {
    return(
        <div className="w-[390px] bg-[#F8F9FC] mx-auto mt-4">
           <Header info={info[0]}/>
        </div>
    )
}

export default UploadedPage;