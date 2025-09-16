import React, { useRef, useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TextInput as RNTextInput,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import Slider from '@react-native-community/slider';
import { launchImageLibrary } from 'react-native-image-picker';
import { Text, Input, Button } from '../index';
import { useTheme } from '../../context/ThemeContext';
import {
  LightColors,
  moderateScalePx,
  scalePx,
  verticalScalePx,
} from '../../constants';
import { validateEmail, getPasswordValidation } from '../../constants/regex';
import CommonStyles from '../../constants/commonStyles';

const interestsList = ['Music', 'Sports', 'Travel', 'Coding', 'Reading'];

const FullFormScreen = () => {
  const { theme, themeType, toggleTheme } = useTheme();
  const styles = createStyles(theme.colors);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const [gender, setGender] = useState<'male' | 'female' | 'other'>('male');
  const [subscribe, setSubscribe] = useState(false);
  const [agree, setAgree] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);

  const [age, setAge] = useState(18);
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [country, setCountry] = useState('');
  const countries = ['India', 'USA', 'UK', 'Australia'];

  const emailRef = useRef<RNTextInput>(null);
  const phoneRef = useRef<RNTextInput>(null);
  const passwordRef = useRef<RNTextInput>(null);
  const confirmPasswordRef = useRef<RNTextInput>(null);
  const bioRef = useRef<RNTextInput>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Full name is required';

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.replace(/\D/g, '').length !== 10) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else {
      const { isLengthValid, hasLowerCase, hasUpperCase, hasNumber } =
        getPasswordValidation(password);
      if (!isLengthValid)
        newErrors.password = 'Password must be at least 8 characters';
      else if (!hasLowerCase)
        newErrors.password = 'Password must include a lowercase letter';
      else if (!hasUpperCase)
        newErrors.password = 'Password must include an uppercase letter';
      else if (!hasNumber)
        newErrors.password = 'Password must include a number';
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!bio.trim()) newErrors.bio = 'Please enter a short bio';
    if (!country) newErrors.country = 'Please select a country';
    if (!agree) newErrors.agree = 'You must agree to terms & conditions';
    if (!profileImage)
      newErrors.profileImage = 'Please upload a profile picture';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const formData = {
      name,
      email,
      phone,
      password,
      bio,
      gender,
      subscribe,
      agree,
      age,
      dob,
      country,
      profileImage,
      interests,
    };
    console.log('Form Submitted:', formData);
    Alert.alert('Form Submitted!', 'Check console for details.');
  };

  const handleImagePick = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if (result.assets && result.assets[0]) {
      setProfileImage(result.assets[0].uri || null);
    }
  };

  const toggleInterest = (item: string) => {
    if (interests.includes(item)) {
      setInterests(interests.filter(i => i !== item));
    } else {
      setInterests([...interests, item]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={CommonStyles.flex1}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={CommonStyles.center}>
          <Text mode="titleMedium" style={styles.sectionLabel}>
            Profile Picture
          </Text>
          <TouchableOpacity
            style={styles.imagePicker}
            onPress={handleImagePick}
          >
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage}
              />
            ) : (
              <Text>Upload Image</Text>
            )}
          </TouchableOpacity>
          {errors.profileImage && (
            <Text style={{ color: theme.colors.error }}>
              {errors.profileImage}
            </Text>
          )}
        </View>

        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => emailRef.current?.focus()}
          error={errors.name}
        />

        <Input
          ref={emailRef}
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => phoneRef.current?.focus()}
          error={errors.email}
        />

        <Input
          ref={phoneRef}
          label="Phone"
          placeholder="Enter phone number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => passwordRef.current?.focus()}
          error={errors.phone}
        />

        <Input
          ref={passwordRef}
          label="Password"
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          secureToggle
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => confirmPasswordRef.current?.focus()}
          error={errors.password}
        />

        <Input
          ref={confirmPasswordRef}
          label="Confirm Password"
          placeholder="Re-enter password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          secureToggle
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => bioRef.current?.focus()}
          error={errors.confirmPassword}
        />

        <Input
          ref={bioRef}
          label="Bio"
          placeholder="Tell us about yourself"
          value={bio}
          onChangeText={setBio}
          multiline
          inputStyle={styles.h80}
          error={errors.bio}
        />

        <Text mode="titleMedium" style={styles.sectionLabel}>
          Select Country
        </Text>
        <View style={styles.dropdown}>
          {countries.map(item => (
            <TouchableOpacity
              key={item}
              style={[
                styles.dropdownItem,
                country === item && { backgroundColor: theme.colors.border },
              ]}
              onPress={() => setCountry(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {errors.country && (
          <Text style={{ color: theme.colors.error }}>{errors.country}</Text>
        )}

        <Text mode="titleMedium" style={styles.sectionLabel}>
          Gender
        </Text>
        <View style={styles.row}>
          {['male', 'female', 'other'].map(g => (
            <TouchableOpacity
              key={g}
              style={styles.radioOption}
              onPress={() => setGender(g as any)}
            >
              <View
                style={[
                  styles.radioCircle,
                  gender === g && styles.radioSelected,
                ]}
              />
              <Text>{g}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text mode="titleMedium" style={styles.sectionLabel}>
          Interests
        </Text>
        <View style={styles.rowWrap}>
          {interestsList.map(item => (
            <TouchableOpacity
              key={item}
              style={[
                styles.interestChip,
                interests.includes(item) && styles.interestSelected,
              ]}
              onPress={() => toggleInterest(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.rowBetween}>
          <Text>Subscribe to Newsletter</Text>
          <Switch value={subscribe} onValueChange={setSubscribe} />
        </View>

        <View style={styles.rowBetween}>
          <Text>Dark Mode</Text>
          <Switch value={themeType === 'dark'} onValueChange={toggleTheme} />
        </View>

        <View style={styles.row}>
          <CheckBox value={agree} onValueChange={setAgree} />
          <Text>I agree to Terms & Conditions</Text>
        </View>
        {errors.agree && (
          <Text style={{ color: theme.colors.error }}>{errors.agree}</Text>
        )}

        <Text>Age: {age}</Text>
        <Slider
          style={styles.SliderStyle}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={age}
          onValueChange={setAge}
        />

        <View style={styles.mv30}>
          <Button
            label="Select Date of Birth"
            onPress={() => setShowDatePicker(true)}
          />

          <Text mode="labelLarge" style={styles.sectionLabel}>
            DOB: {dob.toDateString()} {dob.toLocaleTimeString()}
          </Text>

          {showDatePicker && (
            <DateTimePicker
              value={dob}
              mode="date"
              display="default"
              onChange={(_, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  setDob(selectedDate);
                  setTimeout(() => setShowTimePicker(true), 300);
                }
              }}
            />
          )}

          {showTimePicker && (
            <DateTimePicker
              value={dob}
              mode="time"
              display="default"
              onChange={(_, selectedTime) => {
                setShowTimePicker(false);
                if (selectedTime) setDob(selectedTime);
              }}
            />
          )}
        </View>

        <Button label="Submit Form" onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FullFormScreen;

const createStyles = (colors: LightColors) =>
  StyleSheet.create({
    mv30: { marginVertical: verticalScalePx(30) },
    SliderStyle: { width: '100%', height: verticalScalePx(40) },
    h80: { height: scalePx(80) },
    container: {
      flexGrow: 1,
      padding: scalePx(16),
      backgroundColor: colors.white,
    },
    sectionLabel: {
      marginTop: verticalScalePx(12),
      marginBottom: verticalScalePx(6),
      fontSize: moderateScalePx(14),
      color: colors.textPrimary,
    },
    imagePicker: {
      width: scalePx(120),
      height: scalePx(120),
      borderRadius: scalePx(60),
      backgroundColor: colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: verticalScalePx(12),
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: scalePx(60),
    },
    dropdown: {
      borderWidth: scalePx(1),
      borderColor: colors.border,
      borderRadius: scalePx(6),
      marginBottom: verticalScalePx(12),
    },
    dropdownItem: {
      paddingVertical: verticalScalePx(10),
      paddingHorizontal: scalePx(12),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: verticalScalePx(6),
    },
    rowBetween: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: verticalScalePx(12),
    },
    rowWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: verticalScalePx(12),
    },
    interestChip: {
      paddingVertical: scalePx(6),
      paddingHorizontal: scalePx(12),
      borderRadius: scalePx(16),
      borderWidth: scalePx(1),
      borderColor: colors.border,
      margin: scalePx(4),
    },
    interestSelected: {
      backgroundColor: '#ddd',
    },
    radioOption: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: scalePx(16),
    },
    radioCircle: {
      width: scalePx(20),
      height: scalePx(20),
      borderRadius: scalePx(10),
      borderWidth: scalePx(2),
      borderColor: colors.border,
      marginRight: scalePx(6),
    },
    radioSelected: {
      backgroundColor: colors.border,
    },
  });
