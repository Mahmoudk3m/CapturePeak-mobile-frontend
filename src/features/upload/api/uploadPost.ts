import {axiosClient} from '@/lib/axiosClient';
import {queryClient} from '@/lib/queryClient';
import {useMutation} from '@tanstack/react-query';

const uploadPost = async (data: Home.UploadPost): Promise<Home.Post> => {
  return await axiosClient.post('/upload', data);
};

export const useUploadPost = () => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
    onError: error => {
      console.error('Upload error:', error);
    },
    mutationKey: ['uploadPost'],
    mutationFn: uploadPost,
  });
};
