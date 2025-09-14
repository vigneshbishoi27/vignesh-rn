import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';
import {
  lightColors,
  moderateScalePx,
  scalePx,
  verticalScalePx,
} from '../../constants';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/NavigationProps';

type FallbackProps = {
  error: Error;
  resetError: () => void;
};

const MyFallback = ({ error, resetError }: FallbackProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSendMail = () => {
    const subject = encodeURIComponent('App Crash Report');
    const body = encodeURIComponent(
      `Hello Team,\n\nI encountered an issue while using the app.\n\nError Details:\n${error?.message}\n\nSteps to reproduce:\n1. \n2. \n3. \n\nDevice Info:\n(Please add your phone model, OS version here)\n\nThanks!`,
    );
    Linking.openURL(
      `mailto:support@yourdomain.com?subject=${subject}&body=${body}`,
    );
  };

  const handleRestart = () => {
    resetError();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oops! Something went wrong.</Text>

      <Text style={styles.subtitle}>
        Please try again, or give us details so we can fix this for a better
        future experience for all customers.
      </Text>

      {error?.message ? (
        <Text style={styles.error}>Error: {error.message}</Text>
      ) : null}

      <View style={styles.buttonContainer}>
        <Button title="Restart App" onPress={handleRestart} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Report Issue via Email" onPress={handleSendMail} />
      </View>
    </View>
  );
};

export default MyFallback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: scalePx(20),
    backgroundColor: lightColors.white,
  },
  title: {
    fontSize: moderateScalePx(22),
    fontWeight: '700',
    marginBottom: verticalScalePx(10),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: moderateScalePx(16),
    textAlign: 'center',
    marginBottom: verticalScalePx(15),
    color: '#333',
  },
  error: {
    fontSize: moderateScalePx(14),
    color: 'red',
    marginBottom: verticalScalePx(20),
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: verticalScalePx(8),
    width: '80%',
  },
});
