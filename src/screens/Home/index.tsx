/********** Modules Imports **********/

// 3rd-party
import { Image, View } from 'react-native';

// styles and assets
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';

import { GAMES } from '../../utils/games';

// components
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

/**
 * Home screen.
*/
export function Home() {

  /********** TSX Code **********/
  
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading 
        title="Encontre seu duo!" 
        subtitle="Selecione o game que deseja jogar..." 
      />

      <GameCard data={GAMES[0]} />
    </View>
  );
}
