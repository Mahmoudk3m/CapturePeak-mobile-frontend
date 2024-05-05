import 'react-native-gesture-handler';
import React from 'react';
import {queryClient} from '@/lib/queryClient';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaView, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainStackNavigator from '@/navigation/MainStackNavigator';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <NavigationContainer>
          <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <StatusBar barStyle={'light-content'} />
            <MainStackNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default App;
