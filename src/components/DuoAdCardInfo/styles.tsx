/********** Module Imports **********/

// React Native
import { StyleSheet } from 'react-native';

// styles and assets
import { THEME } from '../../theme';

/********** Styles of DuoAdCardInfo **********/

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginBottom: 4
  },
  info: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  }
});
