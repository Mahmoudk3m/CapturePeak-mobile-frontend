import {axiosClient} from '@/lib/axiosClient';
import {useQuery} from '@tanstack/react-query';

const getPosts = async (): Promise<Home.Post[]> => {
  return await axiosClient.get('/images');
};

export const useGetPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });
};
