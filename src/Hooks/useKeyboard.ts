import { useKeyboardStore } from '@/Stores';
import React from 'react';
import { Keyboard } from 'react-native';

const useKeyboard = () => {
  const showKeyboard = useKeyboardStore(state => state.show);
  const hideKeyboard = useKeyboardStore(state => state.hide);
  React.useEffect(() => {
    const listenerDeyboardDidShow = Keyboard.addListener('keyboardDidShow', e => {
      showKeyboard(e.endCoordinates.height);
    });
    const listenerDeyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      hideKeyboard();
    });
    return () => {
      listenerDeyboardDidShow.remove();
      listenerDeyboardDidHide.remove();
    };
  }, []);
};

export default useKeyboard;
