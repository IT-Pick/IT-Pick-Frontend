import axios from 'axios';

interface RankingItem {
  keyword: string;
  rank: number;
  nateRank: number;
  naverRank: number;
  zumRank: number;
  googleRank: number;
  namuwikiRank: number;
}

interface RankingResult {
  redisKey: string;
  rankingList: RankingItem[];
}

interface Response {
  code: number;
  status: number;
  message: string;
  result: RankingResult;
}

export const getRankingInfo = async (
  community: string,
  period: string,
  date: string
) => {
  try {
    const response = await axios.get<Response>('/api/rank', {
      params: {
        community: community,
        period: period,
        date: date,
      },
    });

    console.log('랭킹 API 응답 데이터 확인', response.data);

    const rankingList = response.data.result.rankingList.map(
      (item: RankingItem) => {
        const tags = [
          item.nateRank !== -1 ? `네이트 ${item.nateRank}등` : '',
          item.naverRank !== -1 ? `네이버 ${item.naverRank}등` : '',
          item.zumRank !== -1 ? `줌 ${item.zumRank}등` : '',
          item.googleRank !== -1 ? `구글 ${item.googleRank}등` : '',
          item.namuwikiRank !== -1 ? `나무위키 ${item.namuwikiRank}등` : '',
        ].filter((tag) => tag !== ''); // 빈 문자열 제거

        return {
          rank: item.rank,
          name: item.keyword,
          tags: tags,
        };
      }
    );

    return rankingList;
  } catch (error) {
    console.error('랭킹 조회 중 오류:', error);
    throw error;
  }
};
