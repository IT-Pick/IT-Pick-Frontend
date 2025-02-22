import axios from "axios";

export const getKeyword = async(query: string) => {
    const response = await axios.get(
        `/api/keyword/search`,
        {params: {
            query
        }}
    )
    return response.data;
}