import { createTheme } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';
import createTypography from '@material-ui/core/styles/createTypography';

const palette = createPalette({
  primary: {
    main: '#4b86fc',
    dark: '#387ed0',
  },
  secondary: {
    main: '#7732ff',
  },
  info: {
    main: '#28d28e',
    dark: '#09965d',
  },
  warning: {
    main: '#ff5152',
    dark: '#ff5251',
  },
  grey: {
    300: '#f3f3f2',
    400: '#e3e3e2',
    500: '#c1c2c4',
    600: '#a6a7a9',
    700: '#7f8185',
    800: '#29282d',
    900: '#1d1e21',
  },
});

const typography = createTypography(palette, (createdPalette) => ({
  fontFamily:
    'Lato, Apple SD Gothic Neo, Spoqa Han Sans, Malgun Gothic, Helvetica Neue, Helvetica, Arial, Dotum, Trebuchet MS, sans-serif',
  fontSize: 14,
  color: createdPalette.primary.main,
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 18,
  },
  body2: {
    color: createdPalette.grey[600],
  },
}));

const theme = createTheme({
  palette,
  typography,
});

export default {
  theme,
  palette,
  typography,
};
