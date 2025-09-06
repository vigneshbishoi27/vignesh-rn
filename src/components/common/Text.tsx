import React from 'react';
import { Text as RnText, StyleProp, TextProps, TextStyle } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { moderateScalePx } from '../../constants';
import fonts from '../../assets/fonts';

// Display  - displaySmall(36), displayMedium(45), displayLarge(57)
// Headline - headlineSmall(24), headlineMedium(28), headlineLarge(32)
// Title    - titleSmall(16), titleMedium(18), titleSemiLarge(20),  titleLarge(22)
// Label    - labelSmall(11), labelMedium(12), labelLarge(14)
// Body     - bodySmall(8), bodyMedium(10), bodyLarge(12)

export type TextMode =
  | 'displaySmall'
  | 'displayMedium'
  | 'displayLarge'
  | 'headlineSmall'
  | 'headlineMedium'
  | 'headlineLarge'
  | 'titleSmall'
  | 'titleMedium'
  | 'titleSemiLarge'
  | 'titleLarge'
  | 'labelSmall'
  | 'labelMedium'
  | 'labelLarge'
  | 'bodySmall'
  | 'bodyMedium'
  | 'bodyLarge';

export type TextFamily =
  | 'default'
  | 'regular'
  | 'bold'
  | 'light'
  | 'medium'
  | 'semiBold';

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  mode?: TextMode;
  style?: StyleProp<TextStyle>;
  color?: string;
  family?: TextFamily;
}

const fontSizes: Record<TextMode, number> = {
  displaySmall: 36,
  displayMedium: 45,
  displayLarge: 57,

  headlineSmall: 24,
  headlineMedium: 28,
  headlineLarge: 32,

  titleSmall: 16,
  titleMedium: 18,
  titleSemiLarge: 20,
  titleLarge: 22,

  labelSmall: 11,
  labelMedium: 12,
  labelLarge: 14,

  bodySmall: 8,
  bodyMedium: 10,
  bodyLarge: 12,
};

const Text: React.FC<AppTextProps> = ({
  children,
  mode = 'labelLarge',
  style,
  color,
  family = 'default',
  ...rest
}) => {
  const { theme } = useTheme();

  //   const getFontWeight = (mode: TextMode): TextStyle['fontWeight'] => {
  //     if (mode.startsWith('display') || mode.startsWith('headline')) return '700';
  //     if (mode.startsWith('title')) return '600';
  //     if (mode.startsWith('label')) return '500';
  //     return '400'; // body default
  //   };

  const getVariantStyle = (): TextStyle => {
    return {
      fontSize: moderateScalePx(fontSizes[mode]),
      color: color ?? theme.colors.textPrimary,
      //   fontWeight: getFontWeight(mode),
      fontFamily: fonts[family],
    };
  };

  return (
    <RnText style={[getVariantStyle(), style]} {...rest}>
      {children}
    </RnText>
  );
};

export default Text;
