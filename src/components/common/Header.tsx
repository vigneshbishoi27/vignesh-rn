import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext';
import { LightColors, scalePx, verticalScalePx } from '../../constants';
import CommonStyles from '../../constants/commonStyles';
import Text from './Text';

interface HeaderProps {
  title?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode | React.ReactNode[];
  onLeftPress?: () => void;
  onRightPress?: () => void;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  centerTitle?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  containerStyle,
  titleStyle,
  centerTitle = true,
}) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme.colors, insets.top);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.sideContainer}>
        {leftIcon ? (
          <TouchableOpacity
            activeOpacity={0.7}
            hitSlop={CommonStyles.hitSlop}
            onPress={onLeftPress}
            style={styles.iconWrapper}
          >
            {leftIcon}
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.titleContainer}>
        {title ? (
          <Text
            numberOfLines={1}
            style={[
              styles.title,
              centerTitle && styles.centerTitle,
              titleStyle,
            ]}
            mode="titleSmall"
            family="medium"
          >
            {title}
          </Text>
        ) : null}
      </View>

      <View style={styles.sideContainer}>
        {Array.isArray(rightIcon)
          ? rightIcon.map((icon, i) => (
              <TouchableOpacity
                activeOpacity={0.7}
                hitSlop={CommonStyles.hitSlop}
                key={i}
                onPress={onRightPress}
                style={styles.iconWrapper}
              >
                {icon}
              </TouchableOpacity>
            ))
          : rightIcon && (
              <TouchableOpacity
                activeOpacity={0.7}
                hitSlop={CommonStyles.hitSlop}
                onPress={onRightPress}
                style={styles.iconWrapper}
              >
                {rightIcon}
              </TouchableOpacity>
            )}
      </View>
    </View>
  );
};

export default Header;

const createStyles = (colors: LightColors, _topInset: number) =>
  StyleSheet.create({
    container: {
      //   paddingTop: topInset,
      paddingVertical: verticalScalePx(8),
      paddingHorizontal: scalePx(12),
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.background,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.border,
    },
    sideContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconWrapper: {
      // padding: scalePx(8),
    },
    titleContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: scalePx(8),
    },
    title: {
      color: colors.textPrimary,
    },
    centerTitle: {
      textAlign: 'center',
    },
  });
