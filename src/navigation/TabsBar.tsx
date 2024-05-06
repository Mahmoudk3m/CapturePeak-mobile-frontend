import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {FunctionComponent} from 'react';
import {Pressable, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import clsx from 'clsx';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import useUserStore from '@/stores/userStore';
import UploadButton from '@/features/upload/components/Button';

interface SvgPropsType extends SvgProps {
  activeRoute?: boolean;
}

interface Props extends BottomTabBarProps {
  icons: {
    source: FunctionComponent<SvgPropsType>;
  }[];
}

const TabsBar = (props: Props) => {
  const {index} = props.state;
  const {user} = useUserStore();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View className="absolute right-0 left-0 bottom-5 flex flex-row justify-between px-5 py-2 mx-4 bg-white rounded-full">
      {props.state.routeNames.map((route, i) => {
        const RouteIcon = props.icons[i];
        const activeRoute = i === index;
        return (
          <Pressable
            onPress={() => {
              navigation.navigate(route);
            }}
            key={i}>
            <View key={route} className="flex flex-col items-center">
              {RouteIcon.source.name === 'UserIcon' ? (
                <Image
                  source={{uri: user?.image}}
                  className={clsx(
                    'w-8 h-8 rounded-full',
                    activeRoute && 'border-2 border-primary-400 ',
                  )}
                />
              ) : RouteIcon.source.name === 'PlusIcon' ? (
                <UploadButton />
              ) : (
                <RouteIcon.source activeRoute={activeRoute} />
              )}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabsBar;
