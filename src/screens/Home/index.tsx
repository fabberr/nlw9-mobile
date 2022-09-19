/********** Modules Imports **********/

// React, React Native
import { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';

// 3rd-party components
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// environment variables
import * as appconfig from '../..//appconfig';

// styles and assets
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';

// components
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { Game, GameCard } from '../../components/GameCard';

/**
 * Home screen.
*/
export function Home() {

  /********** React Hooks **********/

  /** Handles navigation between screens. */
  const navigation = useNavigation();

  function handleNavigateToGameScreen({ id, name, coverURL }: Game) {
    navigation.navigate('game', { id, name, coverURL });
  }
  
  /** Fetch list of games from our API once per component render. */
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    // 'Fetch all games' API endpoint
    const resource = 'games';
    const URL = `https://${appconfig.API_BASE_URL}/${resource}`
    fetch(URL, { method: 'GET' })
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error(err));
  }, []);

  /********** TSX Code **********/
  
  return (
    <Background>
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
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleNavigateToGameScreen(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </Background>
  );
}

/** @todo use RefreshControl component to add pull to refresh behavior */
