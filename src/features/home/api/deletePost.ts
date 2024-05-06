import {axiosClient} from '@/lib/axiosClient';
import {queryClient} from '@/lib/queryClient';
import {useMutation} from '@tanstack/react-query';

const deletePost = async (postId: string): Promise<void> => {
  return await axiosClient.delete(`/images/${postId}/delete`);
};

export const useDeletePost = () => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
    onError: error => {
      console.error('Delete error:', error);
    },
    mutationKey: ['deletePost'],
    mutationFn: deletePost,
  });
};
