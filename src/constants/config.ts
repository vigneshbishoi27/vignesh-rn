interface AppConfig {
  ENV: 'development' | 'staging' | 'production';
  // API configuration
  API_BASE_URL: string;
  API_TIMEOUT: number;
  // Feature toggles for experimental or beta features
  FEATURES: {
    enableBetaFeature: boolean;
    enableNewUI: boolean;
    enablePushNotifications: boolean;
  };
  // App version info
  APP_VERSION: string;
  // Analytics configuration for third-party tracking tools
  ANALYTICS: {
    googleAnalyticsId: string;
    enableAnalytics: boolean;
  };
  // Sentry configuration for error tracking
  SENTRY: {
    dsn: string;
    enableSentry: boolean;
  };
  // Debugging options for development
  DEBUG: {
    enableConsoleLogs: boolean;
    enableRemoteDebugging: boolean;
  };
}

const CONFIG: AppConfig = {
  // Determine the environment based on __DEV__ (true for development) or use additional logic for staging
  ENV: __DEV__ ? 'development' : 'production',

  // API configuration: change endpoints depending on the environment
  API_BASE_URL: __DEV__
    ? 'https://dev.api.example.com'
    : 'https://api.example.com',
  API_TIMEOUT: 15000, // Timeout in milliseconds for API requests

  // Feature toggles: enable or disable experimental features as needed
  FEATURES: {
    enableBetaFeature: false, // Enable beta features for testing
    enableNewUI: true, // Toggle new UI components
    enablePushNotifications: true, // Toggle push notifications
  },

  // Application version: manually update or integrate with CI/CD for automation
  APP_VERSION: '1.0.0',

  // Analytics configuration: for integrating with Google Analytics or similar services
  ANALYTICS: {
    googleAnalyticsId: 'UA-XXXXXXXXX-X', // Replace with your actual Google Analytics ID
    enableAnalytics: true, // Enable analytics in production, disable in development if desired
  },

  // Sentry configuration for error tracking and monitoring
  SENTRY: {
    dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0', // Replace with your actual Sentry DSN
    enableSentry: !__DEV__, // Typically enable Sentry only in production builds
  },

  // Debugging options: enable additional logging and debugging tools during development
  DEBUG: {
    enableConsoleLogs: __DEV__, // Enable detailed console logs in development
    enableRemoteDebugging: __DEV__, // Allow remote debugging in development mode
  },
};

export default CONFIG;
