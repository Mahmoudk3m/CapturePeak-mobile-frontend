import {axiosClient} from '@/lib/axiosClient';
import useUserStore from '@/stores/userStore';
import {useMutation} from '@tanstack/react-query';
import {setToken} from '@/utils/storage';

const userLogin = async (data: AuthTypes.Payload): Promise<AuthTypes.User> => {
  return await axiosClient.post('/login', data);
};

export const useUserLogin = () => {
  const {setUser} = useUserStore();
  return useMutation({
    mutationKey: ['userLogin'],
    onSuccess: async data => {
      await setToken('token', 'token', data.token);
      setUser(data);
    },
    onError: error => {
      console.error('Login error:', error);
    },
    mutationFn: userLogin,
  });
};
