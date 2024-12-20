import React from 'react';
import { StyleSheet } from 'react-native';
import { RootNavigator } from '@/Navigators';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useGlobalLoading } from './Hooks';
import { ToastMessage } from './Components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const App = () => {
  useGlobalLoading();
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <RootNavigator />
        <ToastMessage />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
