import Heart from '@/assets/icons/Heart';
import {useReactPost} from '../api/reactPost';
import Trash from '@/assets/icons/Trash';
import useUserStore from '@/stores/userStore';
import {useDeletePost} from '../api/deletePost';
import React, {useState} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Image, Pressable, Text, View} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import clsx from 'clsx';

export default function Post({
  image,
  username,
  userImage,
  likes,
  liked,
  id,
  last,
}: Home.PostProps) {
  const {mutate} = useReactPost();
  const {mutate: deletePost} = useDeletePost();

  const [isLiked, setIsLiked] = useState(liked);
  const [likesCount, setLikesCount] = useState(likes);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const isVideo = image.includes('video');

  const {user} = useUserStore();
  console.log(user, 'user');
  console.log(username, 'username');
  const handleDelete = () => {
    deletePost(id);
  };

  const handleLike = () => {
    if (!user) {
      navigation.navigate('Login');
      return;
    }

    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);

    mutate(
      {postId: id, action: isLiked ? 'remove' : 'add'},
      {
        onError: () => {
          setIsLiked(!isLiked);
          setLikesCount(isLiked ? likesCount + 1 : likesCount - 1);
        },
      },
    );
  };

  return (
    <View className={clsx('w-full', last && 'mb-24')}>
      <View className="flex flex-row items-center pb-4">
        <Image
          source={{
            uri:
              userImage ||
              'https://static.productionready.io/images/smiley-cyrus.jpg',
          }}
          alt={username}
          className="w-10 h-10 ml-2 rounded-full"
        />
        <Text className="pl-2 font-bold text-sm text-gray-700">{username}</Text>
      </View>
      <View className="h-auto mx-4">
        {isVideo ? (
          <VideoPlayer
            video={{uri: image}}
            videoWidth={400}
            videoHeight={300}
            defaultMuted
            controlsTimeout={1000}
            pauseOnPress
            className="bg-gray-200 rounded-md"
            customStyles={{
              wrapper: {
                borderRadius: 10,
              },
            }}
          />
        ) : (
          <Image
            source={{uri: image}}
            width={400}
            height={300}
            alt="random"
            className="w-full h-auto pb-2 bg-gray-200 object-cover rounded-md"
          />
        )}
        <View className="flex flex-row justify-between mt-2">
          <View className="flex flex-row">
            <Pressable onPress={handleLike} className="mr-1">
              <Heart filled={isLiked} />
            </Pressable>
            <Text className="pl-2 text-gray-700">{likesCount}</Text>
          </View>
          {username === user?.username && (
            <Pressable onPress={handleDelete} className="mr-1">
              <Trash />
            </Pressable>
          )}
        </View>
      </View>
      {!last && <View className="h-[1px] border-2 my-4 border-gray-100" />}
    </View>
  );
}
