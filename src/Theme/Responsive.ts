import { Dimensions, ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');
export const screenWidth = width < height ? width : height;
export const screenHeight = width > height ? width : height;

export class Responsive {
  public static STATUSBAR_DEFAULT_HEIGHT = 20;

  public static STATUSBAR_X_HEIGHT = 44;

  public static STATUSBAR_IP12_HEIGHT = 47;

  public static STATUSBAR_IP12MAX_HEIGHT = 47;

  public static PADDING_SIZE = 24;

  public static WIDTH_SCREEN_WITHOUT_PADDING = screenWidth - this.PADDING_SIZE * 2;

  public static BUTTON_HEIGHT = 56;

  public static HEADER_COMPONENT_HEIGHT = 50;

  public static BOTTOM_TAB_HEIGHT = 85;

  public static isNotchIphone = (): boolean => {
    const dimensions = Dimensions.get('window')
    return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTV &&
      (dimensions.height === 780 ||
        dimensions.width === 780 ||
        dimensions.height === 812 ||
        dimensions.width === 812 ||
        dimensions.height === 844 ||
        dimensions.width === 844 ||
        dimensions.height === 896 ||
        dimensions.width === 896 ||
        dimensions.height === 926 ||
        dimensions.width === 926 ||
        // iphone 13 mini, 12 mini
        dimensions.height === 780 ||
        dimensions.width === 780 ||
        // iphone 15, 15pro, 14 pro
        dimensions.height === 852 ||
        dimensions.width === 852 ||
        // iphone 15 plus, 15pro max, 14 pro max,
        dimensions.height === 932 ||
        dimensions.width === 932)
    )
  }

  public static ifNotchIphone(iphoneXStyle: any, regularStyle: any): any {
    if (this.isNotchIphone()) {
      return iphoneXStyle;
    }
    return regularStyle;
  }

  STATUSBAR_HEIGHT = Responsive.ifNotchIphone(Responsive.STATUSBAR_X_HEIGHT, Responsive.STATUSBAR_DEFAULT_HEIGHT);
  MESSAGE_MARGIN_TOP = this.STATUSBAR_HEIGHT + 10;
}

type NamedStyles<T> = {
  [P in keyof T]: { skipResponsive?: boolean } | ViewStyle | TextStyle | ImageStyle;
};
export const ResponsiveStyleSheet = {
  ...StyleSheet,
  create: <T extends NamedStyles<T> | NamedStyles<any>>(styles: T | NamedStyles<T>, skipResponsive?: boolean): T =>
    StyleSheet.create(
      objectMap(styles, (value: any) => {
        if (skipResponsive || value.skipResponsive) {
          delete value.skipResponsive;
          return value;
        } else {
          delete value.skipResponsive;
          return checkForResponsive(value);
        }
      }),
    ) as T,
};

const objectMap = (object: any, mapFn: Function) => {
  return Object.keys(object).reduce((result: any, key) => {
    result[key] = mapFn(object[key]);
    return result;
  }, {});
};

const checkForResponsive = (object: any) => {
  const heightProperties = [
    'height',
    'paddingTop',
    'paddingBottom',
    'marginTop',
    'marginBottom',
    'paddingVertical',
    'marginVertical',
    'top',
    'bottom',
    'minHeight',
    'maxHeight',
    'borderTopWidth',
    'borderBottomWidth',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ];
  const widthProperties = [
    'width',
    'paddingLeft',
    'paddingRight',
    'marginLeft',
    'marginRight',
    'paddingHorizontal',
    'marginHorizontal',
    'left',
    'right',
    'minWidth',
    'maxWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ];
  const fontProperties = ['fontSize', 'lineHeight'];
  return Object.keys(object).reduce((result: any, key) => {
    if (typeof object[key] === 'number') {
      if (
        key.includes('flex') ||
        key.includes('opacity') ||
        key.includes('elevation') ||
        key.includes('shadowOpacity') ||
        key.includes('aspectRatio') ||
        key.includes('zIndex')
      ) {
        result[key] = object[key];
      } else if (heightProperties.includes(key)) {
          result[key] = verticalScale(object[key]);
        } else if (widthProperties.includes(key)) {
          result[key] = scale(object[key]);
        } else if (fontProperties.includes(key)) {
          result[key] = moderateScale(object[key]);
        } else {
          result[key] = object[key];
        }
    } else {
      result[key] = object[key];
    }

    return { ...result };
  }, {});
};
