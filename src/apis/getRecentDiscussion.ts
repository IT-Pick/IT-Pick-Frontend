import axios from 'axios';

export const getRecentDiscussion = async () => {
  try {
    const token = localStorage.getItem('accessToken');

    const response = await axios.get(`/api/debate/recent`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    return response.data.result;
  } catch (error) {
    console.error('검색페이지의 최근 본 토론 불러오는 중 오류 발생:', error);
    throw error;
  }
};