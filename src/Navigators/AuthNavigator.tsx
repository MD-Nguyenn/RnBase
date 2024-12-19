import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AUTH_NAVIGATION } from '@/Constants/RouteNames';
import { LoginScreen } from '@/Screens';

export type AuthStackParam = {
  [AUTH_NAVIGATION.LOGIN_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParam>();

export function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={LoginScreen} name={AUTH_NAVIGATION.LOGIN_SCREEN} options={{ header: () => null }} />
    </Stack.Navigator>
  );
}
