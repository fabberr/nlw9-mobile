/********** Module Imports **********/

// react-navigation
import { NavigationContainer } from "@react-navigation/native";

// app navigators
import { AppRoutesNativeStackNavigator } from "./app.routes";

/**
 * Component: Routes.
 * 
 * Exports a NavigationContainer containing routes for the app screens.
 * Currently using the Native Stack Navigator.
*/
export function Routes() {

  /********** TSX Code **********/

  return (
    <NavigationContainer>
      <AppRoutesNativeStackNavigator />
    </NavigationContainer>
  );
}
