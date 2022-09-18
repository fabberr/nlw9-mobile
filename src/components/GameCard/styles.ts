/********** Module Imports **********/

// React Native
import { StyleSheet } from 'react-native';

// styles and assets
import { THEME } from '../../theme';

/********** Style Module Exports **********/

export const styles = StyleSheet.create({
  container: {
    marginRight: 16
  },
  cover: {
    width: THEME.COVER_ART.ORIG_WIDTH * THEME.COVER_ART.SCALE_FACOR,
    height: THEME.COVER_ART.ORIG_HEIGHT * THEME.COVER_ART.SCALE_FACOR,
    justifyContent: 'flex-end',
    borderRadius: 8,
    overflow: 'hidden'
  },
  footer: {
    width: '100%',
    height: THEME.COVER_ART.ORIG_HEIGHT * .3,
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
