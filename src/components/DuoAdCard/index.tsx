/********** Module Imports **********/

// React Native
import { View } from 'react-native';

// styles and assets
import { styles } from './styles';
import { THEME } from '../../theme';

// components
import { DuoAdCardInfo } from '../DuoAdCardInfo';

/********** Interfaces **********/

/** Represents an `ad` resource in the format returned by the API. */
export interface Ad {
  id:           string;   /** UUID of the ad. */
  gameId:       string;   /** UUID of the game this ad refers to. */
  name:         string;   /** Screen name of the person who made the ad */
  yearsPlaying: number;   /** Number of years this person has been playing the game for. */
  weekdays:     string[]; /** Which days of the week this person is available to play the game. */
  hourStart:    string;   /** Time this person usually starts playing. */
  hourEnd:      string;   /** Time this person usually stops paying. */
  useVoiceChat: boolean;  /** Is this person available for voice chat? */
}

interface DuoAdCardProps {
  data: Ad;
}

/**
 * Component: DuoAdCard.
 * 
 * Displays information about a specific ad.
*/
export function DuoAdCard({ data }: DuoAdCardProps) {

  /********** TSX Code **********/
  
  return (
    <View style={styles.container}>
      <DuoAdCardInfo
        labelText="Nome"
        infoText={data.name}
      />
      <DuoAdCardInfo
        labelText="Tempo de jogo"
        infoText={`${data.yearsPlaying} anos`}
      />
      <DuoAdCardInfo
        labelText="Disponibilidade"
        infoText={ `${data.weekdays.length} dias | ${data.hourStart} - ${data.hourEnd}` }
      />
      <DuoAdCardInfo
        labelText="Chamade de áudio?"
        infoText={ data.useVoiceChat ? 'Sim' : 'Não' }
        infoFontColor={ data.useVoiceChat ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT }
      />
    </View>
  );
}
