import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useMemo } from 'react';
import { AppNavigator } from '@/Navigators/AppNavigator';
import { AuthNavigator } from '@/Navigators/AuthNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROOT_ROUTES } from '@/Constants';
import { navigationRef, screenOptions } from './NavigationUtils';
import { STORAGE_KEYS, storage } from '@/Storage';
import '@/Services/NetworkService';

export type RootStackParam = {
  [ROOT_ROUTES.APP_NAVIGATION]: undefined;
  [ROOT_ROUTES.AUTH_NAVIGATION]: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParam>();

export function RootNavigator() {
  const [isAuth, setIsAuth] = React.useState(!!storage.getString(STORAGE_KEYS.TOKEN));

  useEffect(() => {
    const checkAppInstalled = storage.getBoolean(STORAGE_KEYS.APP_INSTALLED);
    const listener = storage.addOnValueChangedListener(keyChanged => {
      if (keyChanged === STORAGE_KEYS.TOKEN) {
        setIsAuth(!!storage.getString(keyChanged));
      }
    });
    if (!checkAppInstalled) {
      storage.clearAll();
      setTimeout(() => {
        storage.set(STORAGE_KEYS.APP_INSTALLED, true);
      }, 100);
    }

    if (isAuth) {
      //
    } else {
      //
    }

    return () => {
      listener.remove();
    };
  }, [isAuth]);

  const chooseScreen = useMemo(() => {
    return isAuth ? (
      <RootStack.Screen name={ROOT_ROUTES.APP_NAVIGATION} component={AppNavigator} />
    ) : (
      <RootStack.Screen name={ROOT_ROUTES.AUTH_NAVIGATION} component={AuthNavigator} />
    );
  }, [isAuth]);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={screenOptions as any}>{chooseScreen}</RootStack.Navigator>
    </NavigationContainer>
  );
}
