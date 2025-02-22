import axios from 'axios';

export const getLiveDiscussionBest3 = async () => {
  const response = await axios.get(
    `api/debate/trend`,
  )
  return response.data.result;
}
