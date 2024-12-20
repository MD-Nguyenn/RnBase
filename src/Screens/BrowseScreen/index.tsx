import { View } from 'react-native';
import { styles } from './style';
import React from 'react';

import { AppButton, Container, ErrorLabel } from '@/Components';
import { STORAGE_KEYS, storage } from '@/Storage';
import { CommonColors } from '@/Theme';
interface IProps {
  navigation: any;
}

const BrowseScreen = (props: IProps) => {
  return (
    <Container>
      <View style={styles.container}>
        <AppButton
          text={'Tap here to logout BrowseScreen'}
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

export default React.memo(BrowseScreen);
