import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ImageStyle,
  StyleProp,
} from 'react-native';
import { LightColors, scalePx, verticalScalePx } from '../../constants';
import { useTheme } from '../../context/ThemeContext';
import Text from './Text';

interface CardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  variant?: 'default' | 'outlined' | 'shadow' | 'image' | 'list';
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  image,
  variant = 'default',
  onPress,
  containerStyle,
  titleStyle,
  subtitleStyle,
  descriptionStyle,
  imageStyle,
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
      {variant === 'image' && image ? (
        <Image source={{ uri: image }} style={[styles.image, imageStyle]} />
      ) : null}

      {variant === 'list' && image ? (
        <View style={styles.row}>
          <Image
            source={{ uri: image }}
            style={[styles.listImage, imageStyle]}
          />
          <View style={styles.flex}>
            {title ? (
              <Text
                mode="titleSmall"
                family="medium"
                style={[styles.title, titleStyle]}
                numberOfLines={1}
              >
                {title}
              </Text>
            ) : null}
            {subtitle ? (
              <Text style={[styles.subtitle, subtitleStyle]} numberOfLines={1}>
                {subtitle}
              </Text>
            ) : null}
            {description ? (
              <Text
                mode="labelMedium"
                numberOfLines={1}
                style={[styles.description, descriptionStyle]}
              >
                {description}
              </Text>
            ) : null}
          </View>
        </View>
      ) : (
        <>
          {title ? (
            <Text style={[styles.title, titleStyle]} numberOfLines={1}>
              {title}
            </Text>
          ) : null}
          {subtitle ? (
            <Text style={[styles.subtitle, subtitleStyle]} numberOfLines={2}>
              {subtitle}
            </Text>
          ) : null}
          {description ? (
            <Text
              mode="labelMedium"
              style={[styles.description, descriptionStyle]}
              numberOfLines={2}
            >
              {description}
            </Text>
          ) : null}
        </>
      )}
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

export default Card;

const createStyles = (colors: LightColors) =>
  StyleSheet.create({
    card: {
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
      shadowColor: colors.shadow,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3,
    },
    title: {
      color: colors.textPrimary,
    },
    subtitle: {
      color: colors.textSecondary,
      //   marginTop: verticalScalePx(1),
    },
    description: {
      color: colors.textTertiary,
      //   marginTop: verticalScalePx(4),
    },
    image: {
      width: '100%',
      height: scalePx(160),
      borderRadius: scalePx(8),
      marginBottom: scalePx(8),
      resizeMode: 'cover',
    },
    listImage: {
      width: scalePx(60),
      height: scalePx(60),
      borderRadius: scalePx(8),
      marginRight: scalePx(10),
      resizeMode: 'cover',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    flex: {
      flex: 1,
    },
  });
