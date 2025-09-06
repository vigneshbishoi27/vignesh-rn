import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const windowDimensions = Dimensions.get('window');
// const screenDimensions = Dimensions.get('screen');

export const WIDTH = windowDimensions.width;
export const HEIGHT = windowDimensions.height;

// export const TABLET =
//   (Platform.OS !== 'web' && Math.min(WIDTH, HEIGHT) >= 600) || false;

export const TABLET = DeviceInfo.isTablet();

export const scalePx = (n: number): number => {
  if (typeof n !== 'number' || isNaN(n) || n <= 0) return 0;
  try {
    return TABLET ? scale(n / 2) : scale(n);
  } catch {
    return scale(n);
  }
};

export const verticalScalePx = (n: number): number => {
  if (typeof n !== 'number' || isNaN(n) || n <= 0) return 0;
  try {
    return TABLET ? verticalScale(n / 1.5) : verticalScale(n);
  } catch {
    return verticalScale(n);
  }
};
export const moderateScalePx = (n: number): number => {
  if (typeof n !== 'number' || isNaN(n) || n <= 0) return 0;
  try {
    return TABLET ? moderateScale(n, 0.2) : moderateScale(n);
  } catch {
    return moderateScale(n);
  }
};
