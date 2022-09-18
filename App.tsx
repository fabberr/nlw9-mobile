/********** Module Imports **********/

// React Native
import { StatusBar } from 'react-native';

// 3rd-party assets
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

// app screens
import { Home } from './src/screens/Home';

/**
 * Component: App.
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
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* Wait for fonts to load, then redirect to Home screen */}
      { fontsLoaded ? <Home/> : <LoadingIndicator/> }
    </Background>
  );
}
