import {axiosClient} from '@/lib/axiosClient';
import {queryClient} from '@/lib/queryClient';
import useUserStore from '@/stores/userStore';
import {setToken} from '@/utils/storage';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useMutation} from '@tanstack/react-query';

const updateUser = async (data: {
  user: SettingsTypes.User;
}): Promise<SettingsTypes.UpdateUser> => {
  return await axiosClient.put('/update', data);
};

export const useUpdateUser = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {setUser} = useUserStore();

  return useMutation({
    mutationFn: updateUser,
    mutationKey: ['updateUser'],
    onSuccess: async data => {
      await setToken('token', 'token', data.token);
      setUser(data);
      navigation.navigate('Home');
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
  });
};
