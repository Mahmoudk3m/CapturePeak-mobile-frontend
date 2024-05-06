import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '@/features/home';
import TabsBar from './TabsBar';
import {HomeIcon, PlusIcon, UserIcon} from '@/assets/icons';
import UploadButton from '@/features/upload/components/Button';

const TabNavigator = createBottomTabNavigator();
const Icons = [
  {
    source: HomeIcon,
  },
  {
    source: PlusIcon,
  },
  {
    source: UserIcon,
  },
];
export default function TabNavigation() {
  return (
    <TabNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => null,
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <TabsBar {...props} icons={Icons} />}>
      <TabNavigator.Screen name="Home" component={Home} />
      <TabNavigator.Screen name="UploadButton" component={UploadButton} />

      {/* <TabNavigator.Screen name="Profile" component={Profile} /> */}
    </TabNavigator.Navigator>
  );
}
