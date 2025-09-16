import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import Toast from 'react-native-toast-message';
import ErrorBoundary from 'react-native-error-boundary';
import MyFallback from './src/components/common/MyFallback';
import { useEffect } from 'react';
import Orientation from 'react-native-orientation-locker';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/constants/i18n';

function App() {
  return (
    <ErrorBoundary FallbackComponent={MyFallback}>
      <I18nextProvider i18n={i18n}>
        <SafeAreaProvider>
          <ThemeProvider>
            <AppContent />
          </ThemeProvider>
          <Toast />
        </SafeAreaProvider>
      </I18nextProvider>
    </ErrorBoundary>
  );
}

function AppContent() {
  const { themeType } = useTheme();

  useEffect(() => {
    Orientation.lockToPortrait(); // lock when this screen opens
    // return () => Orientation.unlockAllOrientations(); // reset on exit if needed
  }, []);

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
