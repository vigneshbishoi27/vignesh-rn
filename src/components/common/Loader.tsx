import React from 'react';
import {
  ActivityIndicator,
  Modal,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { LightColors, scalePx } from '../../constants';

interface LoaderProps {
  visible?: boolean;
  size?: 'small' | 'large' | number;
  color?: string;
  overlay?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Loader: React.FC<LoaderProps> = ({
  visible = false,
  size = 'large',
  color,
  overlay = false,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createStyles(theme.colors);

  if (overlay) {
    return (
      <Modal transparent visible={visible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.loaderView}>
            <ActivityIndicator
              size={size}
              color={color ?? theme.colors.primary}
            />
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style={[styles.inline, style]}>
      <ActivityIndicator size={size} color={color ?? theme.colors.primary} />
    </View>
  );
};

export default Loader;

const createStyles = (colors: LightColors) =>
  StyleSheet.create({
    loaderView: {
      backgroundColor: colors.white,
      padding: scalePx(20),
      borderRadius: scalePx(10),
    },
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.loaderBG,
    },
    inline: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
