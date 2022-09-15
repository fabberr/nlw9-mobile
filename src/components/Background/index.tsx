/********** Module Imports **********/

// 3rd-party
import { ImageBackground } from 'react-native';

// styles and assets
import { styles } from './styles';
import bgImg from '../../assets/background-galaxy.png';

/********** Interfaces **********/

interface BackgroundProps {
    children: React.ReactNode;
};

/**
 * Component: Background
 * 
 * Background of the application, all other components are rendered on top of this.
*/
export function Background({ children }: BackgroundProps) {

  /********** TSX Code **********/
  
  return (
    <ImageBackground
      source={bgImg}
      defaultSource={bgImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
