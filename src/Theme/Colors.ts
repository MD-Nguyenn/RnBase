export const CommonColors = {
  primary: '#0084ff',
  secondary: '#ff6f00',
  typography: '#000',
  black: '#000',
  white: '#fff',
  placeholder: '#4F555A',
  error: '#FF0000',
  border: '#eee',
  background: '#FFF',
  kFF7A51: '#FF7A51',
  kA4AAB2: '#A4AAB2',
  kA6A6AA: '#A6A6AA',
  k676E75: '#676E75',
  mainDark: '#353535',
  mainLight: '#fff',
  kC0C0C0: '#C0C0C0',
  green: '#009E4B',
  FF864E: '#FF864E',
  lightRed: '#FF4E431A',
  red: '#F13F34',
  lightGray: '#A5A5A5',
  lightGray3: '#F8F8F8',
  brown: '#BFA27F',
  yellow: '#F7C846',
  lightGreen: 'rgba(166, 255, 70, 0.1)',
  lightBlue: 'rgba(70, 141, 247, 0.1)',
  blue: '#468DF7',
  A467FF: '#A467FF',
  E8E8E8: '#E8E8E8',
};

type ColorTheme = {
  background: string;
  textHeader: string;
  bgColorIconHeader: string;
  whiteAndBlack: string;
  inputBackground: string;
  subTextConversationItem: string;
  borderTopBottomBar: string;
  unselectTabIcon: string;
};

export const LightColors: ColorTheme = {
  background: '#FFF',
  textHeader: '#000',
  bgColorIconHeader: 'rgba(0,0,0, 0.04)',
  whiteAndBlack: '#000',
  inputBackground: 'rgba(0, 0, 0, 0.05)',
  subTextConversationItem: 'rgba(0,0,0,0.5)',
  borderTopBottomBar: CommonColors.kA6A6AA,
  unselectTabIcon: CommonColors.kA4AAB2,
};

export const DarkColors: ColorTheme = {
  background: '#000',
  textHeader: '#FFF',
  bgColorIconHeader: '#3B3B3B',
  whiteAndBlack: '#FFF',
  inputBackground: 'rgba(255, 255, 255, 0.20)',
  subTextConversationItem: 'rgba(255, 255, 255, 0.50)',
  borderTopBottomBar: '#000',
  unselectTabIcon: CommonColors.k676E75,
};
