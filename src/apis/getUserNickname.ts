import axios from 'axios';

export const getUserNickname = async () => {
  try {
    const token = localStorage.getItem('accessToken');

    const response = await axios.get('/api/user/nickname', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    return response.data.result.nickname;
  } catch (error) {
    console.error('닉네임 불러오는 중 오류 발생:', error);
    throw error;  
  }
};
