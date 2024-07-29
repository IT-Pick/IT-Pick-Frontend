import React, { useState } from "react";
import ico_roundcheck_filled from "../../assets/images/24x24/ico_roundcheck_filled.svg";
import ico_roundcheck_outline from "../../assets/images/24x24/ico_roundcheck_outline.svg";

const AgreementPage: React.FC = () => {
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [isAgeChecked, setIsAgeChecked] = useState(false);
    const [isAdChecked, setIsAdChecked] = useState(false);

    const handleAllCheck = () => {
        const newCheckState = !isAllChecked;
        setIsAllChecked(newCheckState);
        setIsAgeChecked(newCheckState);
        setIsAdChecked(newCheckState);
    };

    const handleAgeCheck = () => {
        const newCheckState = !isAgeChecked;
        setIsAgeChecked(newCheckState);
        setIsAllChecked(newCheckState && isAdChecked);
    }

    const handleAdCheck = () => {
        const newCheckState = !isAdChecked;
        setIsAdChecked(newCheckState);
        setIsAllChecked(newCheckState && isAgeChecked);
    }

    const isFormValid = isAgeChecked;

    return (
        <div className="w-[390px] mx-auto pt-[72px] bg-[#F8F9FC]">
            <h1 className="text-2xl font-pretendard font-bold ml-6 mb-[64px]">
                <span className="text-point500">회원가입</span>을 위한<br />약관에 동의해주세요.
            </h1>
            <div className="flex flex-col gap-[24px] mx-[20px]">
                <div className="w-[352px] h-[54px] bg-[#EDF0F3] p-[12px] border border-1 border-[#9EAAB5] rounded-[8px] flex items-center">
                    <img 
                        src={isAllChecked ? ico_roundcheck_filled : ico_roundcheck_outline} 
                        alt="check icon" 
                        className="cursor-pointer"
                        onClick={handleAllCheck}
                    />
                    <div className="text-[16px] font-[700] ml-2">아래 약관에 모두 동의합니다.</div>
                </div>


                <div className="w-[334px] flex justify-between items-center ml-[8px]">
                    <div className="flex items-center justify-start gap-[12px]">
                        <img 
                            src={isAgeChecked ? ico_roundcheck_filled : ico_roundcheck_outline} 
                            alt="check icon" 
                            className="cursor-pointer"
                            onClick={handleAgeCheck}
                        />
                        <div className="text-[14px] font-[500]">[필수] 만 14세 이상이며 모두 동의합니다.</div>
                    </div>
                    <div className="text-[#9EAAB5] text-[12px] font-[400] underline cursor-pointer">내용보기</div>
                </div>


                <div className="w-[334px] flex justify-between items-center ml-[8px]">
                    <div className="flex items-center justify-start gap-[12px]">
                        <img 
                            src={isAdChecked ? ico_roundcheck_filled : ico_roundcheck_outline} 
                            alt="check icon" 
                            className="cursor-pointer"
                            onClick={handleAdCheck}
                        />
                        <div className="text-[14px] font-[500]">[선택] 광고성 정보 수신에 모두 동의합니다.</div>
                    </div>
                    <div className="text-[#9EAAB5] text-[12px] font-[400] underline cursor-pointer">내용보기</div>
                </div>
            </div>
            <button 
                className={`w-[352px] h-[48px] ml-[19px] mt-[300px] py-2 rounded flex items-center justify-center font-pretendard font-bold text-[16px] text-white ${isFormValid ? 'bg-point500' : 'bg-gray2'}`}
                disabled={!isFormValid}
                style={{ border: 'none', padding: 0, borderRadius: '12px' }}
            >
                가입하기
            </button>
        </div>
    )
}

export default AgreementPage;
