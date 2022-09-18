/********** Module Imports **********/

// React Native
import { ImageBackground, ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

// 3rd-party components
import { LinearGradient } from 'expo-linear-gradient';

// styles and assets
import { styles } from './styles';
import { THEME } from '../../theme';

/********** Interfaces **********/

/** Props Accepted by `GameCard` component. */
export interface GameCardProps {
  id: string;                 /** The game's UUID. */
  name: string;               /** Name of the title. */
  ads: string;                /** Current number of ads. */
  cover: ImageSourcePropType; /** URL or path to an image of the game's cover. */
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps; /** Data to be displayed in the card. */
}

/**
 * Component: GameCard.
 * 
 * Displays information about a game title, including a cover image and number of ads.
*/
export function GameCard({ data, ...remainingProps }: Props) {

  /********** TSX Code **********/
  
  return (
    <TouchableOpacity style={styles.container} {...remainingProps}>
      <ImageBackground style={styles.cover} source={data.cover}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.ads}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
