/********** Module Imports **********/

// 3rd-party components
import { SafeAreaView } from 'react-native-safe-area-context';

// styles and assets
import { styles } from './styles';

// components
import { Background } from '../../components/Background';

/**
 * Game screen.
 * 
 * Displays detailed information about a specific game along with all ads for that game.
*/
export function Game() {

  /********** TSX Code **********/
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
      </SafeAreaView>
    </Background>
  );
}
