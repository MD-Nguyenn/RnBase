import React, { memo, useRef } from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import AppText, { AppTextProps } from './AppText';
import { ScaledSheet } from 'react-native-size-matters';
import Spacer, { SpacerMode } from './Spacer';
import { CommonColors } from '@/Theme';

export interface AppButtonProps {
  text?: string;
  icon?: ImageSourcePropType;
  svgIcon?: React.ReactNode;
  onPress?: () => void | Promise<void>;
  disabled?: boolean;
  backgroundColor?: string;
  disabledBackgroundColor?: string;
  disabledTextColor?: string;
  textColor?: string;
  textSize?: number;
  textWeight?: AppTextProps['fontWeight'];
  textLineHeight?: number;
  textStyle?: TextStyle;
  iconStyle?: StyleProp<ImageStyle>;
  opacity?: number;
  iconDirection?: 'left' | 'right';
  spaceBetween?: boolean;
  style?: StyleProp<ViewStyle>;
  radius?: number;
  spacing?: number;
  modeSpacing?: SpacerMode;
  shadowColor?: string;
  shadowOpacity?: number;
  shadowSize?: number;
  center?: boolean;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const AppButton = ({
  radius = 6,
  backgroundColor = CommonColors.green,
  disabled,
  disabledBackgroundColor = CommonColors.E8E8E8,
  disabledTextColor = CommonColors.lightGray,
  icon,
  svgIcon,
  iconStyle,
  onPress,
  opacity = 0.8,
  text,
  textStyle,
  iconDirection = 'right',
  textColor = CommonColors.mainLight,
  spaceBetween,
  style,
  modeSpacing,
  spacing = 10,
  center = true,
  textSize = 16,
  textWeight = 400,
  textLineHeight = 24,
  fullWidth = false,
  ...restProps
}: AppButtonProps) => {
  const styles = ScaledSheet.create({
    baseBtn: {
      flexDirection: iconDirection === 'right' ? 'row' : 'row-reverse',
      alignItems: 'center',
      justifyContent: spaceBetween ? 'space-between' : center ? 'center' : 'flex-start',
      paddingHorizontal: '16@s',
      height: '34@vs',
      borderRadius: radius,
      backgroundColor: disabled ? disabledBackgroundColor : backgroundColor,
      overflow: 'hidden',
    },
    baseTxt: {
      color: disabled ? disabledTextColor : textColor,
    },
    btnBg: {
      ...StyleSheet.absoluteFillObject,
      zIndex: -1,
    },
    baseIc: {
      height: 24,
      width: 24,
    },
  });

  const lastTime = useRef(0);

  return (
    <TouchableOpacity
      {...restProps}
      disabled={disabled}
      style={[styles.baseBtn, style, fullWidth && { flex: 1 }]}
      activeOpacity={opacity}
      onPress={() => {
        if (Date.now() - lastTime.current > 1500) {
          onPress && onPress();
          lastTime.current = Date.now();
        }
      }}>
      <AppText
        lineHeight={textLineHeight}
        fontSize={textSize}
        fontWeight={textWeight}
        numberOfLines={1}
        style={[styles.baseTxt, textStyle]}>
        {text}
      </AppText>

      {(!!icon || !!svgIcon) && (
        <>
          <Spacer mode={modeSpacing} size={spacing} />

          {svgIcon ?? <Image source={icon as ImageSourcePropType} style={[styles.baseIc, iconStyle]} />}
        </>
      )}
    </TouchableOpacity>
  );
};

export default memo(AppButton);
