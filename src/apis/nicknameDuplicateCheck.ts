import axios from 'axios';

export const nicknameDuplicateCheck = async (nickname: string) => {
  const response = await axios.get(`/api/auth/nickname/check`, {
    params: {
      nickname: nickname,
    },
  });

  return response.data;
};