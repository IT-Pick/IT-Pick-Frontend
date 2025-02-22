import axios from 'axios';

export const getCommunityRankingKeyword = async () => {
  try {
    const response = await axios.get('/api/rank/main-keywords', {});

    return response.data.result;
  } catch (error) {
    console.error('홈 커뮤니티 별 랭킹 키워드 불러오는 중 오류 발생:', error);
    throw error;
  }
};
