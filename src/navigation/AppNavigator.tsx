// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from '../screens/Home/HomeScreen';
// import DetailScreen from '../screens/Details/DetailScreen';
// import {RootStackParamList} from '../types/NavigationProps';

// const Stack = createNativeStackNavigator<RootStackParamList>();

// const AppNavigator: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Detail" component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

// In App.js in a new project

import * as React from 'react';
import { View } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button as AppButton, Text } from '../components/index';
import { useTheme } from '../context/ThemeContext';
import SvgIcons from '../assets/SvgIcons';

function HomeScreen() {
  const { theme, toggleTheme, themeType } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Headline */}
      <Text mode="headlineMedium" family="semiBold" color="tomato">
        Hello World
      </Text>

      {/* Title */}
      <Text mode="titleLarge" family="medium">
        This is a title
      </Text>

      {/* Label */}
      <Text mode="labelSmall" family="regular" color="gray">
        Small label text
      </Text>

      {/* Body */}
      <Text mode="bodyMedium">
        Default body text (theme color, default font family)
      </Text>

      <AppButton
        label="Contained Button"
        mode="contained"
        onPress={() => console.log('Contained pressed')}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      />

      {/* Outlined Button with left icon */}
      <AppButton
        label="Outlined"
        mode="withBorder"
        leftIcon={<SvgIcons.Logo width={50} height={50} />}
        onPress={() => console.log('Outlined pressed')}
      />

      {/* Label-only button */}
      <AppButton
        label="Label Only"
        mode="labelOnly"
        onPress={() => console.log('Label only pressed')}
      />

      {/* Disabled button */}
      <AppButton
        label="Disabled"
        mode="contained"
        disabled
        onPress={() => console.log('Should not trigger')}
      />

      {/* Loading button */}
      <AppButton
        label="Loading..."
        // mode="withBorder"
        loading
        onPress={() => console.log('Loading pressed')}
      />

      {/* Toggle theme button */}
      <AppButton
        label={`Switch to ${themeType === 'light' ? 'Dark' : 'Light'} Mode`}
        mode="contained"
        onPress={toggleTheme}
        buttonStyle={{ marginTop: 20, backgroundColor: theme.colors.primary }}
      />
    </View>
  );
}

const AppNavigator = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(AppNavigator);

export default function App() {
  return <Navigation />;
}
