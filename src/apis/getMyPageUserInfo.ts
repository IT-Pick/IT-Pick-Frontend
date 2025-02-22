import axios from 'axios';

export const getMyPageUserInfo = async () => {
  try {
    const token = localStorage.getItem('accessToken');

    const response = await axios.get('/api/user/my-page', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data.result;
  } catch (error) {
    console.error('마이페이지 정보 불러오는 중 오류 발생:', error);
    throw error;
  }
};
