import { MMKV } from "react-native-mmkv";
export enum STORAGE_KEYS {
  TOKEN = '@@TOKEN',
  TOKEN_ID = 'TOKEN_ID',
  APP_INSTALLED = "APP_INSTALLED",
  LOCALE = "LOCALE",
}
export const storage = new MMKV();
