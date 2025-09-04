import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Text from './common/Text';
import Button from './common/Button';
import SvgIcons from '../assets/SvgIcons';
import { useTheme } from '../context/ThemeContext';
import {
  LightColors,
  moderateScalePx,
  scalePx,
  verticalScalePx,
} from '../constants';
import { strings } from '../constants/strings';
import CommonStyles from '../constants/commonStyles';

const StoryBook = () => {
  const { theme, toggleTheme, themeType } = useTheme();
  const styles = createStyles(theme.colors);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text mode="headlineSmall" style={styles.textComponent}>
        {strings.textComponent}
      </Text>
      {/* 1. Basic */}
      <Text>{strings.defaultBodyMedium}</Text>

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
      <Button label="Default" onPress={() => console.log('Default pressed')} />

      {/* 2. Contained */}
      <Button
        label="Contained"
        mode="contained"
        onPress={() => console.log('Contained pressed')}
      />

      {/* 3. Outlined */}
      <Button
        label="Outlined"
        mode="withBorder"
        onPress={() => console.log('Outlined pressed')}
      />

      {/* 4. Label Only */}
      <Button
        label="Label Only"
        mode="labelOnly"
        onPress={() => console.log('Label only pressed')}
      />

      {/* 5. With Icon */}
      <Button
        mode="withBorder"
        label="Login with Google"
        leftIcon={<SvgIcons.Google width={scalePx(20)} height={scalePx(20)} />}
        onPress={() => console.log('Google pressed')}
      />

      {/* 6. Loading */}
      <Button label="Loading..." loading onPress={() => {}} />

      {/* 7. Disabled */}
      <Button label="Disabled" disabled onPress={() => {}} />

      {/* 8. Custom Label Mode */}
      <Button
        label="Big Title"
        labelMode="headlineSmall"
        onPress={() => console.log('Custom label mode')}
      />

      {/* 9. Custom Label Family */}
      <Button
        label="SemiBold Button"
        labelFamily="semiBold"
        onPress={() => console.log('SemiBold pressed')}
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
        onPress={() => console.log('Download pressed')}
      />

      <View style={[CommonStyles.row, styles.gap20]}>
        <Button
          label="Contained"
          mode="contained"
          onPress={() => console.log('Contained pressed')}
          buttonStyle={CommonStyles.flex1}
        />
        <Button
          label="Contained"
          mode="contained"
          onPress={() => console.log('Contained pressed')}
          buttonStyle={CommonStyles.flex1}
        />
      </View>
    </ScrollView>
  );
};

export default StoryBook;

const createStyles = (colors: LightColors) =>
  StyleSheet.create({
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
