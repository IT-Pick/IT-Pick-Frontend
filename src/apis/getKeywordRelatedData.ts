import axios from 'axios';

interface KeywordResult {
  keywordId: number;
  keyword: string;
  searchLink: string;
  newsTitle: string;
  newsContent: string;
  newsLink: string;
  imageUrl: string;
}

interface Response {
  code: number;
  status: number;
  message: string;
  result: KeywordResult;
}

export const getKeywordRelatedData = async (
  community: string,
  period: string,
  keyword: string
) => {
  try {
    const response = await axios.get<Response>('/api/rank/reference', {
      params: {
        community: community,
        period: period,
        keyword: keyword,
      },
    });

    console.log('키워드 관련자료 api 응답 확인:', response.data);

    return response.data.result;
  } catch (error) {
    console.error('키워드 관련자료 데이터를 가져오는 중 오류 발생:', error);
    throw error;
  }
};
