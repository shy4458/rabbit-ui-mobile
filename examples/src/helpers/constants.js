import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const IsAndroid = Platform.OS === 'android';
export const IsIOS = Platform.OS === 'ios';

export const ScreenWidth = width;
export const ScreenHeight = height;

export const IsIphoneX = IsIOS && !Platform.isPad && !Platform.isTVOS && (ScreenWidth === 812 || ScreenHeight === 812);

export function GetAndroidVersion() {
    return IsAndroid ? parseInt(Platform.Version(), 10) : undefined;
}
