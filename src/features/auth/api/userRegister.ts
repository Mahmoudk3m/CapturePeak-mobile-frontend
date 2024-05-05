import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useMutation} from '@tanstack/react-query';
import {axiosClient} from '@/lib/axiosClient';
import Cookies from 'js-cookie';
import useUserStore from '@/stores/userStore';

const userRegister = async (
  data: AuthTypes.Payload,
): Promise<AuthTypes.User> => {
  return await axiosClient.post('/register', data);
};

export const useUserRegister = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {setUser} = useUserStore();
  return useMutation({
    mutationKey: ['userRegister'],
    onSuccess: data => {
      Cookies.set('token', data.token);
      setUser(data);
      navigation.navigate('home');
    },
    onError: error => {
      console.error('Registration error:', error);
    },
    mutationFn: userRegister,
  });
};
