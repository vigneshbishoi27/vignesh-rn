import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { lightColors } from './themes';
import { scalePx } from './dimensions';

const CommonStyles = StyleSheet.create({
  // Centering styles
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  centerHorizontal: {
    alignItems: 'center',
  },
  centerVertical: {
    justifyContent: 'center',
  },

  // Flex-direction
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },

  width100: {
    width: '100%',
  },

  // Space distribution
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },

  // Flex grow, shrink, and basis
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexShrink: {
    flexShrink: 1,
  },
  flexBasisAuto: {
    flexBasis: 'auto',
  },

  // Alignment for cross-axis (mainly for rows and columns)
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignCenter: {
    alignItems: 'center',
  },

  // Alignment for main axis
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },

  // Flexbox styles
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  // Spacing
  marginSmall: {
    margin: 8,
  },
  marginMedium: {
    margin: 16,
  },
  marginLarge: {
    margin: 24,
  },
  paddingSmall: {
    padding: 8,
  },
  paddingMedium: {
    padding: 16,
  },
  paddingLarge: {
    padding: 24,
  },
  // Border
  border: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  // Shadow (for iOS and Android)
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },

  headerShadow: {
    backgroundColor: lightColors.white,

    shadowColor: lightColors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 4,
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
});

export const createRoundViewStyle = (
  size: number,
  backgroundColor?: string,
): { round: ViewStyle } =>
  StyleSheet.create({
    round: {
      width: scalePx(size),
      height: scalePx(size),
      borderRadius: scalePx(size / 2),
      backgroundColor: backgroundColor || 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export const createRoundImageStyle = (size: number): { round: ImageStyle } =>
  StyleSheet.create({
    round: {
      width: scalePx(size),
      height: scalePx(size),
      borderRadius: scalePx(size / 2),
    },
  });

export default CommonStyles;
