import axios from "axios";

export const getMyDebate = async() => {
    const token = localStorage.getItem('accessToken');
    
    try {
        const response = await axios.get(
            `/api/user/my-debate`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${token}`,
                }
            }
        );
        
        if (response.status === 200 && response.data.code === 1000) {
            return response.data.result;
        } else {
            throw new Error('Failed to fetch debates');
        }
    } catch (error) {
        console.error('Error fetching debates:', error);
        return [];
    }
}
