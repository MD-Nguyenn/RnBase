import React from 'react';
import { CommonColors, FontSizes, Layout, Spacing } from '@/Theme';
import Padding from '@/Components/Padding';
import { AppButton, AppInput, AppText, Box, Container } from '@/Components';
import useTranslation from '@/Hooks/useTranslation';
import { STORAGE_KEYS, storage } from '@/Storage';
import { offGlobalLoading, onGlobalLoading } from '@/Hooks';
import { useForm } from 'react-hook-form';
import { Placeholders, ValidationError } from '@/Constants';

interface ILoginProps {}
interface ILoginFormData {
  email: string;
  password: string;
}

const LoginScreen = (props: ILoginProps) => {
  const trans = useTranslation();

  const { control, handleSubmit } = useForm<ILoginFormData>({
    defaultValues: { email: '', password: '' },
  });
  
  const signIn = (data: ILoginFormData) => {
    //Mock action to call api login
    onGlobalLoading();
    setTimeout(() => {
      //set token here
      const token = 'token_here'
      storage.set(STORAGE_KEYS.TOKEN, token);
      offGlobalLoading();
    }, 1000);
  };
  return (
    <Container>
        <AppText fontSize={FontSizes.h2} fontWeight={400} align="center">
          {trans('auth.signIn')}
        </AppText>
        <Padding vertical={Spacing.xl} />
        <AppInput
          control={control} 
          label={trans('auth.email')}
          placeholder={Placeholders.emailPhonenumber}
          name="email"
        />
        <Padding top={Spacing.s} />
        <AppInput
          secureTextEntry
          label={trans('auth.password')}
          control={control}
          name="password"
          rules={{
            validate: (v: string) => {
              if (v.trim().length === 0) {
                return ValidationError.required;
              }
              return true;
            },
          }}
        />

        <Padding top={Spacing.xl} />

        <Box row align="center" justify="center">
          <AppButton
            text={trans('auth.signIn')}
            textSize={FontSizes.regular}
            onPress={handleSubmit(signIn)}
            textColor={CommonColors.mainDark}
          />
        </Box>
    </Container>
  );
};

export default React.memo(LoginScreen);
