/********** Module Imports **********/

// React, React Native, Expo
import { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

// 3rd-party components
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

// environment variables
import * as appconfig from '../../appconfig';

// styles and assets
import { styles } from './styles';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';

// types
import { GameRouteParams } from '../../@types/navigation';

// components
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoAdCard } from '../../components/DuoAdCard';

/**
 * Game screen.
 * 
 * Displays detailed information about a specific game along with all ads for that game.
*/
export function Game() {
  
  /********** React Hooks **********/

  /** Handles navigation between screens. */
  const navigator = useNavigation();

  function handleNavigateBack() {
    navigator.canGoBack() 
      ? navigator.goBack() 
      : navigator.navigate('home') // fallback if navigator can't find last route
    ;
  }

  /** Retrieves route params passed to the navigator when navigating to this screen. */
  const route = useRoute();
  const game = route.params as GameRouteParams;
    
  /** Fetch list of ads for the game from our API once per component render. */
  const [ads, setAds] = useState<[]>([]);

  useEffect(() => {
    // 'Fetch ads by game' API endpoint
    const resource = `games/${game.id}/ads`;
    const URL = `https://${appconfig.API_BASE_URL}/${resource}`
    fetch(URL, { method: 'GET' })
      .then(res => res.json())
      .then(data => setAds(data))
      .catch(err => console.error(err));
  }, []);

  /********** TSX Code **********/
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleNavigateBack}>
            <Entypo name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} size={20}/>
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.headerSpacingRight} />
        </View>

        <Image source={{ uri: game.coverURL }} style={styles.cover} resizeMode="cover" resizeMethod='scale' />

        <Heading title={game.name} subtitle="Conecte-se e começe a jogar!"/>

        {/* <DuoAdCard /> */}
      </SafeAreaView>
    </Background>
  );
}
