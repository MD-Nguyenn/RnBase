import { APP_NAVIGATION } from '@/Constants';
import { navigate } from '@/Navigators/NavigationUtils';
import { CommonColors, Layout, ResponsiveStyleSheet, screenWidth } from '@/Theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useCallback, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Padding from './Padding';
import { BackgroundSvg, HomeBottomTabSvg, ProfileSvg, SearchBottomTabSvg, SellSvg, ShopSvg } from '@/Assets/Svgs';
import AppText from './AppText';
import LinearGradient from 'react-native-linear-gradient';

const BottomTabBar = ({ state }: BottomTabBarProps) => {
  const tabBars = useMemo(
    () => [
      {
        name: 'Home',
        icon: HomeBottomTabSvg,
        routeName: APP_NAVIGATION.HOME,
        index: 0,
      },
      {
        name: 'Browse',
        icon: SearchBottomTabSvg,
        routeName: APP_NAVIGATION.BROWSE,
        index: 1,
      },
      {
        name: 'Sell',
        // icon: PlusCircleSvg,
      },
      {
        name: 'Shop',
        icon: ShopSvg,
        routeName: APP_NAVIGATION.BROWSE,
        index: 2,
      },
      {
        name: 'Profile',
        icon: ProfileSvg,
        routeName: APP_NAVIGATION.BROWSE,
        index: 3,
      },
    ],
    [],
  );
  const renderTabItem = useCallback(
    (tab: any) => {
      return (
        <React.Fragment key={tab.name}>
          {tab.name !== 'Sell' ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[Layout.fill, Layout.center]}
              onPress={() => navigate(tab.routeName)}>
              {tab.icon && (
                <tab.icon
                  onPress={() => navigate(tab.routeName)}
                  size={24}
                  fill={tab.index === state.index ? CommonColors.green : 'none'}
                  color={tab.index === state.index ? CommonColors.green : CommonColors.lightGray}
                />
              )}
              <AppText color={tab.index === state.index ? CommonColors.green : CommonColors.lightGray} fontSize={12}>
                {tab.name}
              </AppText>
            </TouchableOpacity>
          ) : (
            <Padding horizontal={16}>
              <AppText color={CommonColors.lightGray} style={{ marginTop: 28 }}>
                {tab.name}
              </AppText>
            </Padding>
          )}
        </React.Fragment>
      );
    },
    [state.index],
  );
  const { bottom } = useSafeAreaInsets();
  const tabBarHeight = 86;
  const middleIconSize = 56;
  const midRadius = 28;

  return (
    <View style={styles.rootView}>
      <BackgroundSvg style={styles.rootView} />

      <LinearGradient
        colors={['#009245', '#7BC040']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: 'absolute',
          width: middleIconSize,
          height: middleIconSize,
          borderRadius: midRadius,
          left: screenWidth / 2 - midRadius,
          bottom: tabBarHeight - midRadius,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SellSvg />
      </LinearGradient>
      <View style={[styles.tabBarView, {}]}>{tabBars.map(renderTabItem)}</View>
    </View>
  );
};

export default BottomTabBar;

const styles = ResponsiveStyleSheet.create({
  rootView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBarView: {
    flexDirection: 'row',
    height: 86,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  createBtn: {
    marginBottom: 50,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 99,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: CommonColors.white,
  },
});
