import * as React from 'react';
import { scale } from 'react-native-size-matters';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

interface CustomSvgProps extends SvgProps {
  size?: number;
}
const SvgComponent = ({ size = 24, ...props }: CustomSvgProps) => (
  <Svg width={scale(size)} height={scale(size)} fill="none" {...props}>
    <Circle
      cx="11.4886"
      cy="11.4886"
      r="8.98856"
      stroke={props.color || '#A5A5A5'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M17.7402 18.207L21.2643 21.7219"
      stroke={props.color || '#A5A5A5'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default SvgComponent;
