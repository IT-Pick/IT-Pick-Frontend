import axios from 'axios';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post('/api/auth/login', {
      email, // encodeURIComponent 제거
      password, // encodeURIComponent 제거
    });

    return response.data;
  } catch (error) {
    console.log('로그인 실패:', error);
    return null; //로그인 실패시 null 반환
    // throw error;
  }
};
