import * as React from 'react';
import { scale } from 'react-native-size-matters';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

interface CustomSvgProps extends SvgProps {
  size?: number;
}
const SvgComponent = ({ size = 24, color, ...props }: CustomSvgProps) => (
  <Svg width={size} height={size} fill="none" {...props}>
    <Path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={color || 'white'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M8 12H16M12 8V16"
      stroke={color || 'white'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default SvgComponent;
