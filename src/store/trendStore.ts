import create from 'zustand';
import axios from 'axios';

interface Trend {
  rank: number;
  name: string;
  tags: string[];
}

interface TrendState {
  menuType: 'realTime' | 'daily' | 'weekly';
  date: string;
  trends: Trend[];
  setMenuType: (type: 'realTime' | 'daily' | 'weekly') => void;
  setDate: (date: string) => void;
  fetchTrends: () => void;
}

export const useTrendStore = create<TrendState>((set, get) => ({
  menuType: 'realTime',
  date: new Date().toISOString().split('T')[0],
  trends: [],
  setMenuType: (type) => set({ menuType: type }),
  setDate: (date) => set({ date }),
  fetchTrends: async () => {
    const { menuType, date } = get();
    try {
      const response = await axios.get(`/api/trends?type=${menuType}&date=${date}`);
      set({ trends: response.data });
    } catch (error) {
      console.error('Error fetching trends:', error);
    }
  },
}));
