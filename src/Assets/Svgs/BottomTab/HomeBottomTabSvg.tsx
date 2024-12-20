import * as React from 'react';
import { scale } from 'react-native-size-matters';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

interface CustomSvgProps extends SvgProps {
  size?: number;
}
const SvgComponent = ({ size = 24, color = '#A5A5A5', ...props }: CustomSvgProps) => (
  <Svg width={scale(size)} height={scale(size)} fill="none" {...props}>
    <Path
      d="M8.65722 20.7714V17.7047C8.6572 16.9246 9.29312 16.2908 10.081 16.2856H12.9671C13.7587 16.2856 14.4005 16.9209 14.4005 17.7047V17.7047V20.7809C14.4003 21.4432 14.9343 21.9845 15.603 22H17.5271C19.4451 22 21 20.4607 21 18.5618V18.5618V9.83784C20.9898 9.09083 20.6355 8.38935 20.038 7.93303L13.4577 2.6853C12.3049 1.77157 10.6662 1.77157 9.51342 2.6853L2.96203 7.94256C2.36226 8.39702 2.00739 9.09967 2 9.84736V18.5618C2 20.4607 3.55488 22 5.47291 22H7.39696C8.08235 22 8.63797 21.4499 8.63797 20.7714V20.7714"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default SvgComponent;
