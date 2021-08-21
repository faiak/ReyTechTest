import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

export const PaperThemeDefault = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#3498db',
    // background: 'white',
    // surface: 'white',
    // accent: 'white',
    // error: 'white',
    // text: 'white',
    // onSurface: 'white',
    // disabled: 'white',
    // placeholder: 'white',
    // backdrop: 'white',
    // notification: 'white',
  },
};

export const PaperThemeDark = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: '#3498db',
  },
};

export const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
};

export const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: '#303030',
    card: '#222222',
    text: '#ffffff',
  },
};
