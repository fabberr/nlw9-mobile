/********** Modules Imports **********/

// 3rd-party
import { Image, Text, View } from 'react-native';

// styles and assets
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';

// components
import { Heading } from '../../components/Heading';

/**
 * Home screen.
*/
export function Home() {

  /********** TSX Code **********/
  
  return (
    <View style={styles.container}>
        <Image
            source={logoImg}
            style={styles.logo}
        />

        <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />
    </View>
  );
}
