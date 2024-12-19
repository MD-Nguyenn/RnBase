import {AppFonts, CommonColors, FontSizes, Layout, Spacing} from '@/Theme';
import React, {forwardRef, memo} from 'react';
import {StyleProp, TextInput, TextInputProps, TextStyle} from 'react-native';
import {ScaledSheet, ms, s} from 'react-native-size-matters';
import AppText from './AppText';
import {Control, Controller, FieldValues, RegisterOptions} from 'react-hook-form';

const View = require('react-native/Libraries/Components/View/ViewNativeComponent').default;

export interface AppInputProps extends TextInputProps {
  fontWeight?: keyof typeof AppFonts | string;
  fontSize?: number | keyof typeof FontSizes;
  color?: string;
  lineHeightRatio?: number;
  lineHeight?: number;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
  align?: 'left' | 'center' | 'right';
  useDefaultFont?: boolean;
  label?: string;
  required?: boolean;
  showAsterisk?: boolean;
  height?: number;
  multiline?: boolean;
  rules?: RegisterOptions<FieldValues, string>;
  name?: string;
  control?: Control<any, any>;
}

const AppInput = forwardRef(
  (
    {
      fontWeight = 400,
      fontSize = 'normal',
      color = CommonColors.mainDark,
      placeholderTextColor = CommonColors.placeholder,
      lineHeightRatio = 1.3125,
      lineHeight,
      style,
      containerStyle,
      align = 'left',
      useDefaultFont = false,
      label,
      required,
      height = 42,
      showAsterisk = true,
      editable = true,
      multiline = false,
      keyboardType,
      control,
      rules,
      name,
      ...restProps
    }: AppInputProps,
    ref: React.LegacyRef<TextInput>,
  ) => {
    const size = typeof fontSize === 'string' ? FontSizes[fontSize] : fontSize;
    const textStyles = {
      fontFamily: useDefaultFont ? undefined : typeof fontWeight === 'string' ? fontWeight : AppFonts[fontWeight],
      color,
      fontSize: ms(size),
      ...(lineHeightRatio && {
        lineHeight: ms(size * lineHeightRatio),
      }),
      ...(lineHeight && {lineHeight: ms(lineHeight)}),
      textAlign: align,
      margin: 0,
      padding: 0,
      paddingVertical: ms((42 - size * lineHeightRatio) / 4),
    };

    return (
      <View style={[containerStyle, styles.wrapper]}>
        {label && (
          <AppText fontSize="small" color={!editable ? CommonColors.kC0C0C0 : CommonColors.mainDark}>
            {label}{' '}
            <AppText fontSize="small" color={CommonColors.mainDark}>
              {required && showAsterisk ? '*' : ''}
            </AppText>
          </AppText>
        )}

        {control && name ? (
          <Controller
            control={control}
            rules={rules}
            render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
              <>
                <View
                  style={[
                    styles.base,
                    style,
                    !!error?.message && {borderColor: CommonColors.error},
                    !editable && styles.disable,
                    {height},
                  ]}>
                  <TextInput
                    autoCapitalize="none"
                    multiline={multiline}
                    keyboardType={keyboardType}
                    numberOfLines={4}
                    placeholderTextColor={placeholderTextColor}
                    ref={ref}
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    {...restProps}
                    style={[
                      Layout.fill,
                      textStyles,
                      !editable && styles.disable,
                      multiline && styles.multiline,
                      {height},
                    ]}
                    editable={editable}
                    autoCorrect={false}
                    spellCheck={false}
                    onEndEditing={e => {
                      const {text} = e.nativeEvent;
                      onChange(text?.trim() ?? '');
                    }}
                  />
                </View>
                {error && <AppText style={styles.errorMessage}>{error.message}</AppText>}
              </>
            )}
            name={name}
          />
        ) : (
          <View style={[styles.base, style, !editable && styles.disable, {height}]}>
            <TextInput
              autoCapitalize="none"
              multiline={multiline}
              keyboardType={keyboardType}
              numberOfLines={4}
              placeholderTextColor={placeholderTextColor}
              ref={ref}
              {...restProps}
              style={[Layout.fill, textStyles, !editable && styles.disable, multiline && styles.multiline, {height}]}
              editable={editable}
              autoCorrect={false}
              spellCheck={false}
            />
          </View>
        )}
      </View>
    );
  },
);

export default memo(AppInput);

const styles = ScaledSheet.create({
  base: {
    color: CommonColors.mainDark,
    backgroundColor: CommonColors.kF9F9F9,
    borderRadius: 4,
    paddingHorizontal: s(Spacing.xs),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: CommonColors.mainDark,
    borderWidth: 1,
  },

  wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: CommonColors.background,
    gap: 2,
  },

  disable: {
    backgroundColor: CommonColors.kC0C0C0,
    color: CommonColors.k939393,
  },

  errorMessage: {
    color: CommonColors.error,
    fontSize: ms(FontSizes.small),
    fontFamily: AppFonts['400'],
    marginVertical: 2,
  },
  multiline: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlignVertical: 'top',
  },
});
