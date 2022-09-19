/********** Module Imports **********/

// React
import { ColorValue, Text, View } from 'react-native';

// styles and assets
import { styles } from './styles';
import { THEME } from '../../theme';

/********** Interfaces **********/

export interface DuoAdCardInfoProps {
  labelText:      string;
  infoText:       string;
  infoFontColor?: ColorValue; /** Optional, `THEME.COLORS.TEXT` by default. */
}

/**
 * Component: DuoAdCardInfo.
 * 
 * Displays a piece of textual information about a specific game ad preceeded by 
 * a label.
*/
export function DuoAdCardInfo({ labelText, infoText, infoFontColor = THEME.COLORS.TEXT }: DuoAdCardInfoProps) {

  /********** TSX Code **********/
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{labelText}</Text>
      <Text style={[styles.info, { color: infoFontColor }]}>{infoText}</Text>
    </View>
  );
}
