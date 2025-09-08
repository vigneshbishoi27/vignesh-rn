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
import Text from '../common/Text';
import { useTheme } from '../../context/ThemeContext';
import { LightColors, scalePx, verticalScalePx } from '../../constants';

interface ProductListCardProps {
  image: string;
  title: string;
  price: string;
  discountPrice?: string;
  discountPercent?: number;
  rating?: number; // e.g., 4.2
  description?: string;
  onPress?: () => void;
  onAddToCart?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  priceStyle?: StyleProp<TextStyle>;
}

const ProductListCard: React.FC<ProductListCardProps> = ({
  image,
  title,
  price,
  discountPrice,
  discountPercent,
  rating,
  description,
  onPress,
  onAddToCart,
  containerStyle,
  imageStyle,
  titleStyle,
  priceStyle,
}) => {
  const { theme } = useTheme();
  const styles = createStyles(theme.colors);

  const Stars = rating
    ? Array.from({ length: 5 }, (_, i) => (
        <Text key={i} style={styles.star}>
          {i < Math.floor(rating) ? '★' : '☆'}
        </Text>
      ))
    : null;

  const Content = (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: image }} style={[styles.image, imageStyle]} />

      <View style={styles.details}>
        <Text
          mode="titleSmall"
          family="medium"
          style={[styles.title, titleStyle]}
          numberOfLines={2}
        >
          {title}
        </Text>

        <View style={styles.row}>
          <Text family="medium" style={[styles.price, priceStyle]}>
            {price}
          </Text>
          {discountPrice ? (
            <Text style={styles.discountPrice}>{discountPrice}</Text>
          ) : null}
          {discountPercent ? (
            <Text style={styles.discountPercent}>-{discountPercent}%</Text>
          ) : null}
        </View>

        {rating ? <View style={styles.rating}>{Stars}</View> : null}

        {description ? (
          <Text mode="labelMedium" numberOfLines={2} style={styles.description}>
            {description}
          </Text>
        ) : null}

        {onAddToCart ? (
          <TouchableOpacity style={styles.cartBtn} onPress={onAddToCart}>
            <Text family="medium" style={styles.cartText}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
        {Content}
      </TouchableOpacity>
    );
  }
  return Content;
};

export default ProductListCard;

const createStyles = (colors: LightColors) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      borderRadius: scalePx(8),
      backgroundColor: colors.white,
      marginVertical: verticalScalePx(6),
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colors.border,
      padding: scalePx(10),
    },
    image: {
      width: scalePx(100),
      height: scalePx(100),
      resizeMode: 'cover',
      borderRadius: scalePx(8),
    },
    details: {
      flex: 1,
      paddingHorizontal: scalePx(10),
    },
    title: {
      color: colors.textPrimary,
      marginBottom: verticalScalePx(4),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: verticalScalePx(4),
    },
    price: {
      color: colors.primary,
      marginRight: scalePx(6),
    },
    discountPrice: {
      textDecorationLine: 'line-through',
      color: colors.textSecondary,
      marginRight: scalePx(6),
    },
    discountPercent: {
      color: 'red',
    },
    rating: {
      flexDirection: 'row',
      marginBottom: verticalScalePx(4),
    },
    star: {
      color: '#FFD700',
      marginHorizontal: scalePx(1),
    },
    description: {
      color: colors.textSecondary,
      marginBottom: verticalScalePx(6),
    },
    cartBtn: {
      paddingVertical: scalePx(6),
      paddingHorizontal: scalePx(12),
      backgroundColor: colors.primary,
      borderRadius: scalePx(6),
      alignSelf: 'flex-start',
    },
    cartText: {
      color: colors.white,
    },
  });
