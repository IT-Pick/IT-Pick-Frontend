import axios from "axios";

export const getAlarm = async() => {
    const token = localStorage.getItem("accessToken");
    try{
        const response = await axios.get(`/api/user/alarm`,{
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        return response.data.result;
    }catch(error){
        console.error("알림 불러오는 중 오류 발생", error);
        throw error;
    }
    
}