import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  createAnimatedPropAdapter,
  interpolate,
  interpolateColor,
  processColor,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Defs, Rect } from 'react-native-svg';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedRect = Animated.createAnimatedComponent(Rect);
const adapter = createAnimatedPropAdapter(
  props => {
    if (Object.keys(props).includes('fill')) {
      props.fill = { type: 0, payload: processColor(props.fill) };
    }
  },
  ['fill', 'stroke'],
);
const Switch = ({ isActive, onChange }: any) => {
  const fillProgress = useSharedValue(isActive ? 1 : 0);
  const styleCx = useAnimatedProps(
    () => {
      return {
        cx: interpolate(fillProgress.value, [0, 1], [12, 30]),
      };
    },
    [],
    adapter,
  );
  const styleFill = useAnimatedProps(
    () => {
      return {
        fill: interpolateColor(fillProgress.value, [0, 1], ['#D5D5D5', '#B9AF94']),
      };
    },
    [],
    adapter,
  );

  React.useEffect(() => {
    fillProgress.value = withTiming(isActive ? 1 : 0);
  }, [fillProgress, isActive]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        onChange(!isActive);
      }}>
      <Svg width={44} height={28} fill="none">
        <AnimatedRect animatedProps={styleFill} width={42} height={24} x={0} y={0} rx={12} />
        <AnimatedCircle animatedProps={styleCx} cy={12} r={10} fill="#FFFFFD" />
        <Defs />
      </Svg>
    </TouchableOpacity>
  );
};
export default Switch;
