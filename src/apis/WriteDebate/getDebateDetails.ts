import axios from 'axios';

export const getDebateDetails = async (debateId: number) => {
  console.log("첫 줄입니다");
  const token = localStorage.getItem('accessToken');

  if (!token) {
    throw new Error('토큰이 없습니다!');
    console.log("if 문 안입니다");
  }
  console.log("if문 밖 입니다, 방금 나왔어요");
  console.log(token);

  try {
    const response = await axios.get(`/api/debate/details`, {
      headers: {
        'Authorization': `Bearer ${token}`, // Authorization 헤더에 토큰 추가
      },
      params: {
        debateId: debateId,
      },
    });

    return response.data;
  } catch (error) {
    // 에러 처리: 필요에 따라 특정 에러 코드에 대한 처리 로직 추가 가능
    if (axios.isAxiosError(error) && error.response) {
      const { code } = error.response.data;
      switch (code) {
        case 6002:
          throw new Error('해당 토론이 존재하지 않습니다.');
        case 6007:
          throw new Error('토론 상세 정보 요청에서 잘못된 값이 존재합니다.');
        case 4003:
          throw new Error('유효하지 않은 토큰입니다.');
        default:
          throw new Error('요청 중 오류가 발생했습니다.');
      }
    }
    throw error;
  }
};
