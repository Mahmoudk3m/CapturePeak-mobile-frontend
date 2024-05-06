import Loader from '@/Shared/components/Loader';
import {useGetPosts} from '../api/getPosts';
import Post from '../components/Post';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '@/Shared/components/Header';
export default function Home() {
  const {data, isLoading, isError} = useGetPosts();

  return (
    <ScrollView className="w-full flex-auto bg-white">
      <Header />

      <View className="flex flex-col items-center justify-center">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Text>Error Loading Images</Text>
        ) : data?.length === 0 ? (
          <Text>No Images Found</Text>
        ) : (
          data?.map((item, index) => (
            <Post
              key={index}
              image={item.path}
              username={item.authorId.username}
              userImage={item.authorId.image}
              likes={item.likes}
              liked={item.liked}
              id={item._id}
              last={index === data.length - 1}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
}
