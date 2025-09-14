import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { Text, Button, Loader, Input } from './index';
import SvgIcons from '../assets/SvgIcons';
import { useTheme } from '../context/ThemeContext';
import {
  LightColors,
  moderateScalePx,
  scalePx,
  verticalScalePx,
} from '../constants';
import { strings } from '../constants/strings';
import CommonStyles, { createRoundImageStyle } from '../constants/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './common/Header';
import Images from '../assets/Images';
import Ionicons from '@react-native-vector-icons/ionicons';
import Toast from 'react-native-toast-message';
import Modals from './StoryBook/Modals';
import Card from './common/Card';
import ProfileCard from './common/ProfileCard';
import ProductCard from './common/ProductCard';
import ProductListCard from './common/ProductListCard';

const StoryBook = () => {
  const { theme, toggleTheme } = useTheme();
  const styles = createStyles(theme.colors);

  const [loading, setLoading] = useState(false);
  const [showBuggy, setShowBuggy] = useState(false);

  const passwordRef = useRef<any>(null);
  const usernameRef = useRef<any>(null);

  const BuggyComponent = () => {
    throw new Error('💥 Simulated crash during render!');
    return null;
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text mode="headlineSmall" style={styles.textComponent}>
          {strings.textComponent}
        </Text>
        {/* 1. Basic */}
        <Text>{strings.defaultLabelLarge}</Text>

        {/* 2. Typography Variants */}
        <Text mode="displayLarge">{strings.displayLarge}</Text>
        <Text mode="displayMedium">{strings.displayMedium}</Text>
        <Text mode="displaySmall">{strings.displaySmall}</Text>

        <Text mode="headlineLarge">{strings.headlineLarge}</Text>
        <Text mode="headlineMedium">{strings.headlineMedium}</Text>
        <Text mode="headlineSmall">{strings.headlineSmall}</Text>

        <Text mode="titleLarge">{strings.titleLarge}</Text>
        <Text mode="titleSemiLarge">{strings.titleSemiLarge}</Text>
        <Text mode="titleMedium">{strings.titleMedium}</Text>
        <Text mode="titleSmall">{strings.titleSmall}</Text>

        <Text mode="labelLarge">{strings.labelLarge}</Text>
        <Text mode="labelMedium">{strings.labelMedium}</Text>
        <Text mode="labelSmall">{strings.labelSmall}</Text>

        <Text mode="bodyLarge">{strings.bodyLarge}</Text>
        <Text mode="bodyMedium">{strings.bodyMedium}</Text>
        <Text mode="bodySmall">{strings.bodySmall}</Text>

        {/* 3. Font Families */}
        <Text family="bold" mode="titleLarge">
          {strings.boldTitle}
        </Text>
        <Text family="semiBold" mode="headlineSmall">
          {strings.semiBoldHeadline}
        </Text>
        <Text family="medium" mode="titleMedium">
          {strings.mediumTitle}
        </Text>
        <Text family="light" mode="bodyLarge">
          {strings.lightBody}
        </Text>
        <Text family="regular" mode="bodyMedium">
          {strings.regularBody}
        </Text>

        {/* 4. Custom Colors */}
        <Text color="#e74c3c">{strings.dangerRed}</Text>
        <Text color="#2ecc71" mode="titleMedium">
          {strings.successGreen}
        </Text>
        <Text color={theme.colors.secondary}>{strings.secondaryFromTheme}</Text>

        {/* 5. Style Overrides */}
        <Text style={styles.centeredWithMargin}>
          {strings.centeredWithMargin}
        </Text>
        <Text mode="titleLarge" style={styles.uppercaseText}>
          {strings.uppercaseTitle}
        </Text>

        {/* 6. Inside Layout */}
        <View style={styles.mv16}>
          <Text mode="headlineMedium">{strings.profileText}</Text>
          <Text mode="bodyLarge" color={theme.colors.textSecondary}>
            {strings.profileDescription}
          </Text>
        </View>

        {/* 7. Native TextProps */}
        <Text numberOfLines={1} ellipsizeMode="tail" mode="labelMedium">
          {strings.veryLongText}
        </Text>
        <Text selectable mode="bodyLarge">
          {strings.selectableText}
        </Text>
        <Text accessibilityLabel="Greeting Text" mode="headlineSmall">
          {strings.accessibleHeadline}
        </Text>

        {/* 8. Mixed Example */}
        <Text
          mode="titleLarge"
          family="semiBold"
          color={theme.colors.primary}
          style={styles.underlineText}
        >
          {strings.themedSemiBoldCustom}
        </Text>

        {/*  */}
        {/*  */}

        <Text mode="headlineSmall" style={styles.buttonComponent}>
          {strings.buttonComponent}
        </Text>

        {/* 1. Default */}
        <Button
          label="Default"
          onPress={() => {
            Toast.show({
              type: 'success',
              text1: 'Success 🎉',
              text2: 'Your operation was successful',
            });
          }}
        />

        {/* 2. Contained */}
        <Button
          label="Contained"
          mode="contained"
          onPress={() => {
            Toast.show({
              type: 'error',
              text1: 'Error ❌',
              text2: 'Something went wrong',
            });
          }}
        />

        {/* 3. Outlined */}
        <Button
          label="Outlined"
          mode="withBorder"
          onPress={() => {
            Toast.show({
              type: 'info',
              text1: 'Heads up',
              text2: 'This is an info message',
            });
          }}
        />

        {/* 4. Label Only */}
        <Button
          label="Label Only"
          mode="labelOnly"
          onPress={() => {
            Toast.show({
              type: 'success',
              text1: 'Top Toast',
              position: 'top',
            });
          }}
        />

        {/* 5. With Icon */}
        <Button
          mode="withBorder"
          label="Login with Google"
          leftIcon={
            <SvgIcons.Google width={scalePx(20)} height={scalePx(20)} />
          }
          onPress={() => {
            Toast.show({
              type: 'error',
              text1: 'Bottom Toast',
              position: 'bottom',
            });
          }}
        />

        {/* 6. Loading */}
        <Button label="Loading..." loading onPress={() => {}} />

        {/* 7. Disabled */}
        <Button label="Disabled" disabled onPress={() => {}} />

        {/* 8. Custom Label Mode */}
        <Button
          label="Big Title"
          labelMode="headlineSmall"
          onPress={() => {
            Toast.show({
              type: 'success',
              text1: 'Custom Duration',
              text2: 'This will stay for 5 seconds',
              visibilityTime: 5000,
            });
          }}
        />

        {/* 9. Custom Label Family */}
        <Button
          label="SemiBold Button"
          labelFamily="semiBold"
          onPress={() => {
            Toast.show({
              type: 'success',
              text1: 'Styled Toast',
              text2: 'With custom colors',
              text1Style: { fontSize: 18, fontWeight: 'bold', color: 'blue' },
              text2Style: { fontSize: 14, color: 'green' },
              visibilityTime: 3000,
            });
          }}
        />

        {/* 10. Custom Styles */}
        <Button
          label="Custom Style"
          onPress={() => console.log('Custom pressed')}
          buttonStyle={styles.buttonCustomStyle}
          labelStyle={styles.buttonLabelStyle}
        />

        {/* 11. Combined Example */}
        <Button
          label="Download"
          mode="withBorder"
          leftIcon={<SvgIcons.Logo width={18} height={18} />}
          labelMode="titleMedium"
          labelFamily="bold"
          buttonStyle={{ borderColor: theme.colors.primary }}
          onPress={() => {
            Toast.show({
              type: 'success',
              text1: 'Hello',
              text2: 'This is some something 👋',
            });
          }}
        />

        <View style={[CommonStyles.row, styles.gap20]}>
          <Button
            label="Theme"
            mode="contained"
            onPress={() => {
              toggleTheme();
            }}
            buttonStyle={CommonStyles.flex1}
          />
          <Button
            label="Loader"
            mode="contained"
            onPress={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 5000);
            }}
            buttonStyle={CommonStyles.flex1}
          />
        </View>

        <Button
          label="Error Boundary"
          onPress={() => {
            setShowBuggy(true);
          }}
        />
        {showBuggy && <BuggyComponent />}

        {/*  */}
        {/*  */}

        <Text mode="headlineSmall" style={styles.buttonComponent}>
          {strings.headerComponent}
        </Text>
        <Header title="Home" />
        <Header
          title="Profile"
          leftIcon={<SvgIcons.Back width={scalePx(20)} height={scalePx(20)} />}
          onLeftPress={() => {}}
        />
        <Header
          title="Profile"
          leftIcon={<SvgIcons.Back width={scalePx(20)} height={scalePx(20)} />}
          onLeftPress={() => {}}
          centerTitle={false}
        />
        <Header
          title="Messages"
          rightIcon={<Image source={Images.Profile} style={styles.Profile} />}
          onRightPress={() => console.log('Search pressed')}
        />
        <Header
          title="Dashboard"
          rightIcon={[
            <Image source={Images.Profile} style={styles.Profile} />,
            <Image
              source={Images.Profile}
              style={[styles.Profile, styles.ml10]}
            />,
          ]}
          onRightPress={() => console.log('Right icon pressed')}
        />
        <Header
          title="Custom"
          containerStyle={{ backgroundColor: 'tomato' }}
          titleStyle={{ color: 'white', fontSize: 20 }}
          leftIcon={<SvgIcons.Back width={scalePx(20)} height={scalePx(20)} />}
          rightIcon={
            <Image
              source={Images.Profile}
              style={[styles.Profile, styles.tintColorWhite]}
            />
          }
        />

        {/*  */}
        {/*  */}

        <Text mode="headlineSmall" style={styles.buttonComponent}>
          {strings.inputComponent}
        </Text>

        <Input
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          leftIcon={<Ionicons name="mail-outline" size={20} color="gray" />}
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <Input
          label="Password"
          placeholder="Enter password"
          secureTextEntry
          secureToggle
          ref={passwordRef}
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => usernameRef.current?.focus()}
        />
        <Input
          ref={usernameRef}
          label="Username"
          placeholder="Enter username"
          error="Username is required"
        />
        <Input
          label="Search"
          placeholder="Type here..."
          helperText="You can search by keyword"
          rightIcon={<Ionicons name="search-outline" size={20} color="gray" />}
          onRightIconPress={() => console.log('Search pressed')}
        />

        {/*  */}
        {/*  */}

        <Text mode="headlineSmall" style={styles.buttonComponent}>
          {strings.modalComponent}
        </Text>

        <Modals />

        {/*  */}
        {/*  */}

        <Text mode="headlineSmall" style={styles.buttonComponent}>
          {strings.cardComponent}
        </Text>

        <Card
          title="Default Card"
          description="This is a simple default card."
        />

        <Card
          title="Outlined Card"
          description="This card has a border."
          variant="outlined"
        />

        <Card
          title="Shadow Card"
          description="This card has a shadow."
          variant="shadow"
          onPress={() => console.log('Card pressed')}
        />

        <Card
          image="https://picsum.photos/300/200"
          title="Image Card"
          description="Cute kitten 🐱"
          variant="image"
        />

        <Card
          image="https://picsum.photos/300/200"
          title="Image Card"
          description="Cute kitten 🐱"
          variant="image"
          imageStyle={styles.br0}
          containerStyle={styles.imageCardContainer}
          titleStyle={styles.ph12}
          descriptionStyle={styles.phpb12}
        />

        <Card
          image="https://picsum.photos/100/100"
          title="List Card"
          subtitle="Kitten"
          description="This is a list-style card with left image."
          variant="list"
        />

        <Card
          image="https://picsum.photos/100/100"
          title="Round List Card"
          subtitle="Kitten"
          description="This is a list-style card with left image."
          variant="list"
          imageStyle={[createRoundImageStyle(60).round, {}]}
        />
        <Card
          image="https://picsum.photos/100/100"
          title="Full image list card"
          subtitle="Kitten"
          description="This is a list-style card with left image."
          variant="list"
          imageStyle={styles.fullImageListCardImage}
          containerStyle={styles.fullImageListCardContainer}
        />

        <ProfileCard
          avatar="https://randomuser.me/api/portraits/men/32.jpg"
          name="John Doe"
          subtitle="12:47 PM"
          description="Active 5m ago"
          subDescription="01:47 PM"
          actionLabel="Message"
          // onActionPress={() => console.log('Message pressed')}
          onPress={() => console.log('Card pressed')}
        />

        <ProfileCard
          avatar="https://randomuser.me/api/portraits/men/32.jpg"
          name="John Doe"
          subtitle="12:47 PM"
          description="Active 5m ago"
          subDescription="01:47 PM"
          actionLabel="Message"
          variant="outlined"
          // onActionPress={() => console.log('Message pressed')}
          onPress={() => console.log('Card pressed')}
        />

        <ProfileCard
          avatar="https://randomuser.me/api/portraits/men/32.jpg"
          name="John Doe"
          subtitle="12:47 PM"
          description="Active 5m ago"
          subDescription="01:47 PM"
          actionLabel="Message"
          variant="shadow"
          // onActionPress={() => console.log('Message pressed')}
          onPress={() => console.log('Card pressed')}
        />

        <ProfileCard
          avatar="https://randomuser.me/api/portraits/men/32.jpg"
          name="John Doe"
          // subtitle="12:47 PM"
          description="Active 5m ago"
          // subDescription="01:47 PM"
          actionLabel="Message"
          variant="shadow"
          onActionPress={() => console.log('Message pressed')}
          onPress={() => console.log('Card pressed')}
        />

        <ProductCard
          image="https://picsum.photos/400/300"
          title="Wireless Headphones Bluetooth 5.0 with Noise Cancelling"
          price="$129.99"
          rating={4.5}
          onPress={() => console.log('Product pressed')}
          onAddToCart={() => console.log('Added to cart')}
        />

        <ProductListCard
          image="https://picsum.photos/200/200"
          title="Nike Air Max 2025 Sneakers"
          price="$89.99"
          discountPrice="$129.99"
          discountPercent={30}
          rating={4.3}
          description="Lightweight running shoes with breathable fabric and cushioned sole."
          onPress={() => console.log('Product pressed')}
          onAddToCart={() => console.log('Added to cart')}
        />
      </ScrollView>
      <Loader overlay visible={loading} />
    </SafeAreaView>
  );
};

export default StoryBook;

const createStyles = (colors: LightColors) =>
  StyleSheet.create({
    imageCardContainer: {
      padding: 0,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3,
      shadowColor: colors.shadow,
    },
    phpb12: { paddingHorizontal: scalePx(12), paddingBottom: scalePx(12) },
    ph12: { paddingHorizontal: scalePx(12) },
    br0: { borderRadius: 0 },
    fullImageListCardContainer: {
      paddingVertical: 0,
      paddingLeft: 0,
      shadowColor: colors.shadow,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3,
    },
    fullImageListCardImage: {
      width: scalePx(100),
      height: scalePx(100),
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    tintColorWhite: { tintColor: colors.white },
    ml10: { marginLeft: scalePx(10) },
    Profile: { width: scalePx(20), height: scalePx(20), resizeMode: 'cover' },
    gap20: { gap: scalePx(20) },
    buttonLabelStyle: { fontSize: moderateScalePx(20), letterSpacing: 1 },
    buttonCustomStyle: {
      backgroundColor: colors.success,
      borderRadius: scalePx(50),
      paddingHorizontal: scalePx(40),
    },
    buttonComponent: {
      marginVertical: verticalScalePx(25),
      textAlign: 'center',
      color: colors.error,
    },
    textComponent: {
      color: colors.error,
      textAlign: 'center',
      marginBottom: verticalScalePx(20),
    },
    underlineText: {
      marginTop: verticalScalePx(20),
      textDecorationLine: 'underline',
    },
    mv16: { marginVertical: verticalScalePx(16) },
    uppercaseText: { letterSpacing: 1, textTransform: 'uppercase' },
    centeredWithMargin: {
      textAlign: 'center',
      marginVertical: verticalScalePx(10),
    },
    container: {
      backgroundColor: colors.white,
      padding: scalePx(20),
    },
  });
