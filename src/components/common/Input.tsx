import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
  TouchableOpacity,
  StyleProp,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useTheme } from '../../context/ThemeContext';
import {
  LightColors,
  moderateScalePx,
  scalePx,
  verticalScalePx,
} from '../../constants';
import Text from './Text';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  secureToggle?: boolean;
}

const Input = React.forwardRef<RNTextInput, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      onRightIconPress,
      containerStyle,
      inputStyle,
      secureTextEntry,
      secureToggle = false,
      ...rest
    },
    ref,
  ) => {
    const { theme } = useTheme();
    const styles = createStyles(theme.colors);

    const [isSecure, setIsSecure] = React.useState(secureTextEntry);

    return (
      <View style={[styles.container, containerStyle]}>
        {label ? (
          <Text family="medium" style={styles.label}>
            {label}
          </Text>
        ) : null}

        <View
          style={[
            styles.inputWrapper,
            error ? styles.errorBorder : { borderColor: theme.colors.border },
          ]}
        >
          {leftIcon ? <View style={styles.icon}>{leftIcon}</View> : null}

          <RNTextInput
            ref={ref}
            style={[styles.input, inputStyle]}
            placeholderTextColor={theme.colors.textSecondary}
            secureTextEntry={isSecure}
            allowFontScaling={false}
            {...rest}
          />

          {secureToggle ? (
            <TouchableOpacity
              onPress={() => setIsSecure(!isSecure)}
              style={styles.icon}
            >
              <Ionicons
                name={isSecure ? 'eye-off-outline' : 'eye-outline'}
                size={moderateScalePx(20)}
                color={theme.colors.textSecondary}
              />
            </TouchableOpacity>
          ) : rightIcon ? (
            <TouchableOpacity onPress={onRightIconPress} style={styles.icon}>
              {rightIcon}
            </TouchableOpacity>
          ) : null}
        </View>

        {error ? (
          <Text mode="labelMedium" style={styles.errorText}>
            {error}
          </Text>
        ) : helperText ? (
          <Text mode="labelMedium" style={styles.helperText}>
            {helperText}
          </Text>
        ) : null}
      </View>
    );
  },
);

export default Input;

const createStyles = (colors: LightColors) =>
  StyleSheet.create({
    container: {
      marginVertical: verticalScalePx(8),
    },
    label: {
      marginBottom: scalePx(6),
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: scalePx(8),
      paddingHorizontal: scalePx(10),
      backgroundColor: colors.surface,
    },
    input: {
      flex: 1,
      fontSize: moderateScalePx(16),
      color: colors.textPrimary,
      paddingVertical: verticalScalePx(10),
    },
    icon: {
      paddingHorizontal: scalePx(6),
    },
    errorBorder: {
      borderColor: colors.error,
    },
    errorText: {
      color: colors.error,
      marginTop: scalePx(4),
    },
    helperText: {
      color: colors.textSecondary,
      marginTop: scalePx(4),
    },
  });
