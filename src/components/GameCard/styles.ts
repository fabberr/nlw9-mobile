/********** Module Imports **********/

// 3rd-party
import { StyleSheet } from 'react-native';

// internal
import { THEME } from '../../theme';

/********** Style Module Exports **********/

export const styles = StyleSheet.create({
  container: {
    marginRight: 24
  },
  cover: {
    width: 240,
    heigth: 320,
    justifyContent: 'flex-end',
    borderRadius: 8,
    overflow: 'hidden'
  },
  footer: {
    width: '100%',
    heigth: 120,
    padding: 16,
    justifyContent: 'flex-end'
  },
  name: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD
  },
  ads: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});
