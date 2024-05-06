import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      name: 'userData', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useUserStore;
