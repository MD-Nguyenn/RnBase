import { StyleProp, View, ViewStyle } from 'react-native';
import React, { memo } from 'react';
import { scale, vs } from 'react-native-size-matters';
interface MarginProps {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
  margin?: number;
  horizontal?: number;
  vertical?: number;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}
const Margin = ({
  bottom = 0,
  left = 0,
  right = 0,
  top = 0,
  margin = 0,
  horizontal = 0,
  vertical = 0,
  children,
  style,
  ...restProps
}: MarginProps) => {
  return (
    <View
      {...restProps}
      style={[
        style,
        {
          ...(bottom && {
            marginBottom: vs(bottom),
          }),
          ...(left && { marginLeft: scale(left) }),
          ...(right && { marginRight: scale(right) }),
          ...(top && { marginTop: vs(top) }),
          ...(margin && { margin: scale(margin) }),
          ...(horizontal && {
            marginHorizontal: scale(horizontal),
          }),
          ...(vertical && {
            marginVertical: vs(vertical),
          }),
        },
      ]}>
      {children}
    </View>
  );
};

export default memo(Margin);
