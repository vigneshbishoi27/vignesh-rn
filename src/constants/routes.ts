export const Routes = {
  // Main App Routes
  HOME: 'Home',
  PROFILE: 'Profile',
  SETTINGS: 'Settings',

  // Authentication Routes
  LOGIN: 'Login',
  SIGNUP: 'SignUp',
  FORGOT_PASSWORD: 'ForgotPassword',

  // Details & Info Routes
  DETAILS: 'Details',
  ABOUT: 'About',

  // Additional routes can be added here
};

export type RouteNames = (typeof Routes)[keyof typeof Routes];

// import { Routes } from '../constants/routes';

// // Example using React Navigation:
// navigation.navigate(Routes.HOME);
