import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useMutation} from '@tanstack/react-query';
import {axiosClient} from '@/lib/axiosClient';
import useUserStore from '@/stores/userStore';
import {setToken} from '@/utils/storage';

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
      setToken('token', 'token', data.token);
      setUser(data);
      navigation.navigate('Home');
    },
    onError: error => {
      console.error('Registration error:', error);
    },
    mutationFn: userRegister,
  });
};
