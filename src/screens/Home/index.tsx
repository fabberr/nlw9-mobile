/********** Modules Imports **********/

// React Native
import { FlatList, Image, View } from 'react-native';

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

      <FlatList
        contentContainerStyle={styles.contentList}
        data={GAMES}
        keyExtractor={ item => item.id }
        renderItem={({ item }) => (
          <GameCard data={item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

    </View>
  );
}
