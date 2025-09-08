import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import Text from '../common/Text';
import { useTheme } from '../../context/ThemeContext';
import { LightColors, scalePx, verticalScalePx } from '../../constants';

interface ProfileCardProps {
  avatar: string;
  name: string;
  subtitle?: string;
  description?: string;
  subDescription?: string;
  onPress?: () => void;
  onActionPress?: () => void;
  actionLabel?: string; // e.g., "Follow" / "Message"
  variant?: 'default' | 'outlined' | 'shadow';
  containerStyle?: StyleProp<ViewStyle>;
  nameStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  subDescriptionStyle?: StyleProp<TextStyle>;
  avatarStyle?: StyleProp<ImageStyle>;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatar,
  name,
  subtitle,
  description,
  subDescription,
  onPress,
  onActionPress,
  variant = 'default',
  actionLabel = 'Follow',
  containerStyle,
  nameStyle,
  subtitleStyle,
  descriptionStyle,
  subDescriptionStyle,
  avatarStyle,
}) => {
  const { theme } = useTheme();
  const styles = createStyles(theme.colors);

  const Content = (
    <View
      style={[
        styles.card,
        variant === 'outlined' && styles.outlined,
        variant === 'shadow' && styles.shadow,
        containerStyle,
      ]}
    >
      <Image source={{ uri: avatar }} style={[styles.avatar, avatarStyle]} />

      <View style={styles.info}>
        <View style={styles.rowView}>
          <Text
            mode="titleSmall"
            family="medium"
            style={[styles.name, nameStyle]}
            numberOfLines={1}
          >
            {name}
          </Text>
          {subtitle ? (
            <Text
              mode="labelMedium"
              family="medium"
              style={[styles.subtitle, subtitleStyle]}
              numberOfLines={1}
            >
              {subtitle}
            </Text>
          ) : null}
        </View>
        <View style={styles.rowView}>
          {description ? (
            <Text
              mode="labelMedium"
              family="medium"
              style={[styles.description, descriptionStyle]}
              numberOfLines={1}
            >
              {description}
            </Text>
          ) : null}
          {subDescription ? (
            <Text
              mode="labelMedium"
              family="medium"
              style={[styles.subDescription, subDescriptionStyle]}
              numberOfLines={1}
            >
              {subDescription}
            </Text>
          ) : null}
        </View>
      </View>

      {onActionPress ? (
        <TouchableOpacity style={styles.actionBtn} onPress={onActionPress}>
          <Text mode="labelMedium" family="medium" style={styles.actionText}>
            {actionLabel}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={variant === 'shadow' ? 1 : 0.8}
        onPress={onPress}
      >
        {Content}
      </TouchableOpacity>
    );
  }
  return Content;
};

export default ProfileCard;

const createStyles = (colors: LightColors) =>
  StyleSheet.create({
    rowView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      gap: scalePx(6),
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: scalePx(12),
      borderRadius: scalePx(8),
      backgroundColor: colors.white,
      marginVertical: verticalScalePx(6),
      overflow: 'hidden',
    },
    outlined: {
      borderWidth: 1,
      borderColor: colors.border,
    },
    shadow: {
      backgroundColor: colors.surface,
      shadowColor: colors.shadow,
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 3,
      elevation: 2,
    },
    avatar: {
      width: scalePx(50),
      height: scalePx(50),
      borderRadius: scalePx(25),
      marginRight: scalePx(12),
    },
    info: {
      flex: 1,
    },
    name: {
      color: colors.textPrimary,
      maxWidth: '70%',
    },
    subtitle: {
      color: colors.textSecondary,
    },
    description: {
      color: colors.textSecondary,
      marginTop: verticalScalePx(2),
      maxWidth: '70%',
    },
    subDescription: {
      color: colors.textSecondary,
    },
    actionBtn: {
      paddingVertical: scalePx(6),
      paddingHorizontal: scalePx(12),
      backgroundColor: colors.primary,
      borderRadius: scalePx(6),
    },
    actionText: {
      color: colors.white,
    },
  });
