/********** Module Imports **********/

// React Native
import { ImageBackground } from 'react-native';

// styles and assets
import { styles } from './styles';
import bgImg from '../../assets/background-galaxy.png';

/********** Interfaces **********/

/** Props accepted by `Background` component. */
interface BackgroundProps {
  children: React.ReactNode; /** A collect of ReactDOM nodes, childs of this Background component. */
}

/**
 * Component: Background.
 * 
 * This component is ment to be used as a wrapper for screen components and sets
 * common background image used across all screens.
*/
export function Background({ children }: BackgroundProps) {

  /********** TSX Code **********/
  
  return (
    <ImageBackground source={bgImg} defaultSource={bgImg} style={styles.container}>
      {children}
    </ImageBackground>
  );
}
