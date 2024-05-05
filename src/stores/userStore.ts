import {create} from 'zustand';
import {persist} from 'zustand/middleware';

type User = {
  token: string;
  username: string;
  image?: string;
  id?: string;
} | null;

type UserStoreState = {
  user: User | null;
  setUser: (user: User) => void;
};

const useUserStore = create(
  persist<UserStoreState>(
    set => ({
      user: null,
      setUser: user => set({user}),
    }),
    {
      name: 'userStore',
    },
  ),
);

export default useUserStore;
