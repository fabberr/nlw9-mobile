/********** Module Imports **********/

// 3rd-party
import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

// components
import { Background } from './src/components/Background';
import { LoadingIndicator } from './src/components/LoadingIndicator';

// screens
import { Home } from './src/screens/Home';

/**
 * Component: App
 * 
 * Main entry point for the application.
*/
export default function App() {
  
  /********** Hooks **********/
  
  // load custom font family
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  /********** TSX Code **********/
  
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoaded ? <Home/> : <LoadingIndicator/> }
    </Background>
  );
}
