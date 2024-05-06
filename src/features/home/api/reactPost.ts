import {axiosClient} from '@/lib/axiosClient';
import {queryClient} from '@/lib/queryClient';
import {useMutation} from '@tanstack/react-query';

const reactPost = async (data: Home.ReactPost): Promise<Home.Post> => {
  return await axiosClient.put(`/images/${data.postId}/react`, data, {
    params: {
      action: data.action,
    },
  });
};

export const useReactPost = () => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
    onError: error => {
      console.error('React error:', error);
    },
    mutationKey: ['reactPost'],
    mutationFn: reactPost,
  });
};
