import { APP_NAVIGATION } from '@/Constants';
import { navigate } from '@/Navigators/NavigationUtils';
import { CommonColors, Layout, ResponsiveStyleSheet, screenWidth } from '@/Theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useCallback, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Padding from './Padding';
import { BackgroundSvg, HeartSvg, HomeSvg, SearchSvg } from '@/Assets/Svgs';
import AppText from './AppText';

const BottomTabBar = ({ state }: BottomTabBarProps) => {
  const tabBars = useMemo(
    () => [
      {
        name: 'Home',
        icon: HomeSvg,
        routeName: APP_NAVIGATION.HOME,
        index: 0,
      },
      {
        name: 'Browse',
        icon: SearchSvg,
        routeName: APP_NAVIGATION.SEARCH,
        index: 1,
      },
      {
        name: 'Sell',
        // icon: PlusCircleSvg,
      },
      {
        name: 'Shop',
        icon: HeartSvg,
        routeName: APP_NAVIGATION.NOTIFICATION,
        index: 2,
      },
      {
        name: 'Profile',
        icon: HeartSvg,
        // icon: ({ color, ...restProps }) => (
        //   <AppImage
        //     {...restProps}
        //     containerStyle={[styles.avatar, { borderColor: color }]}
        //     source={{
        //       uri: userStore?.userInfo?.avatar_url || 'https://picsum.photos/200/300',
        //     }}
        //   />
        // ),
        routeName: APP_NAVIGATION.NOTIFICATION,
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
                  color={tab.index === state.index ? CommonColors.primary : CommonColors.white}
                />
              )}
              <AppText color={CommonColors.lightGray}>{tab.name}</AppText>
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
      <View
        style={{
          position: 'absolute',
          width: middleIconSize,
          height: middleIconSize,
          borderRadius: midRadius,
          backgroundColor: 'red',
          left: screenWidth / 2 - midRadius,
          bottom: tabBarHeight - midRadius,
        }}
      />
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
    // backgroundColor: CommonColors.kFF7A51,
    // zIndex: 99,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
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
