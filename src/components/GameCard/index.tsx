/********** Module Imports **********/

// React Native
import { ImageBackground, ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

// 3rd-party components
import { LinearGradient } from 'expo-linear-gradient';

// styles and assets
import { styles } from './styles';
import { THEME } from '../../theme';

/********** Interfaces **********/

/** Represents a `game` resource in the format returned by the API. */
export interface Game {
  id:       string; /** The game's UUID. */
  name:     string; /** Name of the game. */
  coverURL: string; /** URL to an image of the game's cover art. */

  _count: {
    ads: number; /** Current number of ads for this game. */
  };
}

interface GameCardProps extends TouchableOpacityProps {
  data: Game; /** Data to be displayed in the card. */
}

/**
 * Component: GameCard.
 * 
 * Displays information about a game title, including a cover image and number of ads.
 * Supports the same props accepted by `TouchableOpacity` component.
*/
export function GameCard({ data, ...remainingProps }: GameCardProps) {

  /********** TSX Code **********/
  
  return (
    <TouchableOpacity style={styles.container} {...remainingProps}>
      <ImageBackground style={styles.cover} source={{ uri: data.coverURL }}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.ads}>{data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
