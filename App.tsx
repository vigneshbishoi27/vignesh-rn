import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import Toast from 'react-native-toast-message';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
      <Toast />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const { themeType } = useTheme();
  return (
    <>
      <StatusBar
        barStyle={themeType === 'dark' ? 'light-content' : 'dark-content'}
      />
      <AppNavigator />
    </>
  );
}

export default App;
