/********** Modules Imports **********/

// React
import { useEffect, useState } from 'react';

// React Native
import { FlatList, Image } from 'react-native';

// 3rd-party components
import { SafeAreaView } from 'react-native-safe-area-context';

// environment variables
import * as appconfig from '../..//appconfig';

// styles and assets
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';

// components
import { Heading } from '../../components/Heading';
import { Game, GameCard } from '../../components/GameCard';

/**
 * Home screen.
*/
export function Home() {

  /********** React Hooks **********/
  
  // fetch list of games from our API once per page load
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    const resource = 'games';
    const URL = `https://${appconfig.API_BASE_URL}/${resource}`
    fetch(URL, { method: 'GET' })
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error(err));
  }, []);

  /********** TSX Code **********/
  
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading 
        title="Encontre seu duo!" 
        subtitle="Selecione o game que deseja jogar..." 
      />

      <FlatList
        contentContainerStyle={styles.contentList}
        data={games}
        keyExtractor={ item => item.id }
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

    </SafeAreaView>
  );
}
