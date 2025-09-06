export const lightColors = {
  primary: '#3498db',
  secondary: '#2ecc71',

  background: '#ffffff',
  surface: '#f5f5f5',
  white: '#ffffff',
  black: '#000000',

  textPrimary: '#333333',
  textSecondary: '#666666',
  textInverse: '#ffffff',

  border: '#dddddd',
  shadow: '#000000',

  success: '#28a745',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',

  disabled: '#bdc3c7',

  loaderBG: 'rgba(0,0,0,0.35)',
};

export type LightColors = typeof lightColors;

export interface Theme {
  colors: LightColors;
}

// Light theme configuration
export const lightTheme: Theme = {
  colors: lightColors,
};

// Dark theme configuration
export const darkTheme: Theme = {
  colors: {
    primary: '#2980b9',
    secondary: '#27ae60',

    // Backgrounds and Surfaces
    background: '#2c3e50',
    surface: '#34495e',
    white: '#000000',
    black: '#ffffff',

    // Text Colors
    textPrimary: '#ecf0f1',
    textSecondary: '#bdc3c7',
    textInverse: '#ffffff',

    // Borders and Dividers
    border: '#7f8c8d',

    // Shadows
    shadow: '#000000',

    // Status Colors
    success: '#28a745',
    error: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',

    // Disabled State
    disabled: '#7f8c8d',

    loaderBG: 'rgba(0,0,0,0.35)',
  },
};

// Aggregated themes for easy access
export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
