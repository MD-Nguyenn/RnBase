import { HOME_NAVIGATION } from '@/Constants/RouteNames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { screenOptions } from './NavigationUtils';
import { BrowseScreen, HomeScreen } from '@/Screens';

export type HomeStackParam = {
  [HOME_NAVIGATION.HOME]: undefined;
};
const Stack = createNativeStackNavigator<HomeStackParam>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={HOME_NAVIGATION.HOME} screenOptions={screenOptions}>
      <Stack.Screen name={HOME_NAVIGATION.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default React.memo(HomeNavigator);
