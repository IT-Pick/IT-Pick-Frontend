import axios from "axios";

// 키워드 ID로 키워드 이름을 불러오는 함수
export const getKeywordById = async (keywordId: number) => {
    const response = await axios.get(`/api/keyword`, {
        params: {
            keywordId: keywordId,
        },
    });
    return response.data; // 필요한 키워드 이름 데이터를 반환
};
