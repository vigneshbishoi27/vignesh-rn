import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { LightColors, scalePx, verticalScalePx } from '../../constants';
import Text, { TextFamily, TextMode } from './Text';

type ButtonMode = 'labelOnly' | 'withBorder' | 'contained';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  onPress: () => void;
  mode?: ButtonMode;
  leftIcon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;
  labelMode?: TextMode;
  labelFamily?: TextFamily;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  mode = 'contained',
  leftIcon,
  disabled = false,
  loading = false,
  buttonStyle,
  labelStyle,
  labelMode = 'titleSmall',
  labelFamily = 'default',
  ...rest
}) => {
  const { theme } = useTheme();
  const styles = createStyles(theme.colors);

  const getModeStyle = (): ViewStyle => {
    switch (mode) {
      case 'labelOnly':
        return styles.labelOnly;
      case 'withBorder':
        return styles.outlined;
      default:
        return {};
    }
  };
  const getLabelModeStyle = (): TextStyle => {
    switch (mode) {
      case 'labelOnly':
        return styles.blackText;
      case 'withBorder':
        return styles.blackText;
      default:
        return styles.whiteText;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.container,
        getModeStyle(),
        disabled && styles.disabled,
        buttonStyle,
      ]}
      {...rest}
    >
      <View style={styles.content}>
        {loading ? <ActivityIndicator color={theme.colors.white} /> : null}
        {leftIcon ? leftIcon : null}
        <Text
          mode={labelMode}
          family={labelFamily}
          style={[styles.baseText, getLabelModeStyle(), labelStyle]}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const createStyles = (colors: LightColors) =>
  StyleSheet.create({
    container: {
      paddingVertical: verticalScalePx(10),
      paddingHorizontal: scalePx(18),
      borderRadius: scalePx(8),
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: verticalScalePx(6),
      backgroundColor: colors.primary,
    },
    baseText: {
      marginHorizontal: scalePx(8),
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    outlined: {
      borderWidth: 1,
      borderColor: colors.black,
      backgroundColor: 'transparent',
    },
    labelOnly: {
      backgroundColor: 'transparent',
    },
    whiteText: {
      color: colors.white,
    },
    blackText: {
      color: colors.black,
    },
    disabled: {
      backgroundColor: colors.disabled,
    },
  });

export default Button;
