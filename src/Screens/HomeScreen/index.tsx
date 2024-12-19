import { View } from 'react-native';
import { styles } from './style';
import React from 'react';

import { AppButton, Container, ErrorLabel } from '@/Components';
import { STORAGE_KEYS, storage } from '@/Storage';
import { CommonColors } from '@/Theme';
interface IHomeProps {
  navigation: any;
}

const HomeScreen = (props: IHomeProps) => {
  return (
    <Container>
      <View style={styles.container}>
        <AppButton
          text={'Tap here to logout'}
          onPress={() => {
            storage.delete(STORAGE_KEYS.TOKEN);
          }}
          textColor={CommonColors.error}
          style={styles.btnLogout}
        />
      </View>
    </Container>
  );
};

export default React.memo(HomeScreen);
