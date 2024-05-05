import {axiosClient} from '@/lib/axiosClient';
import Cookies from 'js-cookie';
import useUserStore from '@/stores/userStore';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useMutation} from '@tanstack/react-query';

const userLogin = async (data: AuthTypes.Payload): Promise<AuthTypes.User> => {
  return await axiosClient.post('/login', data);
};

export const useUserLogin = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {setUser} = useUserStore();
  return useMutation({
    mutationKey: ['userLogin'],
    onSuccess: data => {
      Cookies.set('token', data.token);
      setUser(data);
      navigation.navigate('home');
    },
    onError: error => {
      console.error('Login error:', error);
    },
    mutationFn: userLogin,
  });
};
