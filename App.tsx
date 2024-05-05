import {queryClient} from '@/lib/queryClient';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView className="flex-1">
        <NavigationContainer>
          <SafeAreaView>
            <StatusBar />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <Text>Hello</Text>
            </ScrollView>
          </SafeAreaView>
        </NavigationContainer>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default App;
