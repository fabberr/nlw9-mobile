/********** Module Imports **********/

// 3rd-party
import { ActivityIndicator, View } from 'react-native';

// styles and assets
import { styles } from './styles';
import { THEME } from '../../theme';

/**
 * Component - LoadingIndicator
 * 
 * Displays a loading indicator on-screen when the app is loading resources.
*/
export function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={THEME.COLORS.PRIMARY}
        size='large'
      />
    </View>
  );
}
