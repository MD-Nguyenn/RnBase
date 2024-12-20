import { CommonColors, FontSizes, Responsive, ResponsiveStyleSheet, screenWidth, Spacing } from '@/Theme';
import React, { memo } from 'react';
import useEmitter, { EDeviceEmitter, emitter } from '@/Hooks/useEmitter';
import AppText from './AppText';
import { SearchSvg } from '@/Assets/Svgs';
import Padding from './Padding';
import Animated, {
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { t } from '@/Locales';
import { scale } from 'react-native-size-matters';

interface ToastMessageProps {
  message: string;
  type: 'success' | 'error' | 'warning';
  duration?: number;
}

export interface IToastRef {
  show: (opts: ToastMessageProps) => void;
}

export const showToast = ({ message = '', type = 'success', duration = 3000 }: ToastMessageProps) => {
  const msg = t(message).indexOf('[missing') > -1 ? message : t(message);
  emitter(EDeviceEmitter.SHOW_TOAST, { message: msg, type, duration });
};

const ToastMessage = React.forwardRef<IToastRef>((_, ref) => {
  const insets = useSafeAreaInsets();
  const MESSAGE_MARGIN_TOP = scale(insets.top);
  const [options, setOptions] = React.useState<ToastMessageProps>({
    message: '',
    type: 'success',
    duration: 3000,
  });

  const ani = useSharedValue(0);

  useEmitter(EDeviceEmitter.SHOW_TOAST, (opts: ToastMessageProps) => {
    setOptions(opts);
  });

  const transform = useAnimatedStyle(() => {
    'worklet';
    return {
      transform: [
        { translateY: interpolate(ani.value, [0, 10], [-4 * MESSAGE_MARGIN_TOP, MESSAGE_MARGIN_TOP], 'clamp') },
      ],
    };
  });

  const whichIcon = React.useMemo(() => {
    if (options.type === 'error') {
      return <SearchSvg />;
    }
    return <SearchSvg />;
  }, [options.type]);

  React.useEffect(() => {
    if (options.message && options.duration) {
      ani.value = withSpring(0, { mass: 1.9, damping: 41, stiffness: 325, overshootClamping: false });
      cancelAnimation(ani);
      ani.value = withSequence(
        withSpring(0, { mass: 1.9, damping: 41, stiffness: 325, overshootClamping: false }),
        withSpring(10, { mass: 1.9, damping: 58, stiffness: 300, overshootClamping: false }),
        withDelay(
          options.duration,
          withSpring(0, { mass: 1.9, damping: 41, stiffness: 325, overshootClamping: false }),
        ),
      );
    } else {
      cancelAnimation(ani);
      ani.value = 0;
    }
  }, [ani, options]);

  if (!options.message) {
    return null;
  }

  return (
    <Animated.View style={[styles.containerToast, transform]}>
      <TouchableOpacity
        style={styles.wrapper}
        activeOpacity={1}
        onPress={() => {
          cancelAnimation(ani);
          ani.value = withSpring(0, { mass: 1.9, damping: 41, stiffness: 325, overshootClamping: false });
        }}>
        <View
          style={[
            styles.bgGradient,
            { backgroundColor: options.type === 'error' ? CommonColors.error : CommonColors.green },
          ]}
        />
        {whichIcon}
        <Padding right={Spacing.xs} />
        <AppText
          // style={styles.styleText}
          numberOfLines={3}
          fontSize={FontSizes.normal}
          fontWeight={600}
          color={CommonColors.background}>
          {typeof options.message !== 'string' ? 'Something went wrong' : options.message}
        </AppText>
      </TouchableOpacity>
    </Animated.View>
  );
});

const styles = ResponsiveStyleSheet.create({
  containerToast: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    zIndex: 1,
  },
  wrapper: {
    width: screenWidth - 80,
    borderRadius: 4,
    paddingVertical: 10,
    paddingLeft: 12,
    paddingRight: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bgGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    borderRadius: 4,
  },
  styleText: {
    width: Responsive.WIDTH_SCREEN_WITHOUT_PADDING - 44,
  },
});

export default memo(ToastMessage);
