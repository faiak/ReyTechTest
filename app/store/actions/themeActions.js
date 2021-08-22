/*
 * Reducer actions related with login
 */
import { types } from './';

export function setIsDarkTheme(value) {
  return {
    type: types.TOGGLE_THEME,
    isDark: value,
  };
}
