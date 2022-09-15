/********** Module Imports **********/

// React
import { StatusBar } from 'react-native';

// internal components
import { Background } from './src/components/Background';

/********** Component: App (main entry point) **********/

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </Background>
  );
}
