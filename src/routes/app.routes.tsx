/********** Module Imports **********/

// react-navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens
import { Home } from '../screens/Home'
import { Game } from '../screens/Game'

/**
 * Component: AppRoutesNativeStackNavigator.
 * 
 * Defines routes for the app screens that use the Native Stack Navigator as the
 * underlying navigator manager.
 * Refer to the react-navigation docs for more details:
 *    <https://reactnavigation.org/docs/native-stack-navigator>
*/
export function AppRoutesNativeStackNavigator() {

  const { Navigator, Screen } = createNativeStackNavigator();
  
  /********** TSX Code **********/
  
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="game" component={Game} />
    </Navigator>
  );
}
