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
import {
  LightColors,
  scalePx,
  verticalScalePx,
} from '../../constants';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  rating?: number; // e.g., 4.5
  onPress?: () => void;
  onAddToCart?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  priceStyle?: StyleProp<TextStyle>;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  rating,
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

      <View style={styles.info}>
        <Text
          mode="titleSmall"
          family="medium"
          numberOfLines={2}
          style={[styles.title, titleStyle]}
        >
          {title}
        </Text>

        <View style={styles.row}>
          <Text
            numberOfLines={1}
            mode="titleSmall"
            style={[styles.price, priceStyle]}
          >
            {price}
          </Text>
          {rating ? <View style={styles.rating}>{Stars}</View> : null}
        </View>
      </View>

      {onAddToCart ? (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.cartBtn}
          onPress={onAddToCart}
        >
          <Text family="medium" style={styles.cartText}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      ) : null}
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

export default ProductCard;

const createStyles = (colors: LightColors) =>
  StyleSheet.create({
    card: {
      borderRadius: scalePx(10),
      backgroundColor: colors.white,
      marginVertical: verticalScalePx(6),
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colors.border,
    },
    image: {
      width: '100%',
      height: scalePx(180),
      resizeMode: 'cover',
    },
    info: {
      padding: scalePx(10),
    },
    title: {
      color: colors.textPrimary,
      marginBottom: verticalScalePx(6),
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    price: {
      color: colors.primary,
      maxWidth: '70%',
    },
    rating: {
      flexDirection: 'row',
    },
    star: {
      color: '#FFD700',
      marginHorizontal: scalePx(1),
    },
    cartBtn: {
      paddingVertical: scalePx(10),
      alignItems: 'center',
      backgroundColor: colors.primary,
    },
    cartText: {
      color: colors.white,
    },
  });
