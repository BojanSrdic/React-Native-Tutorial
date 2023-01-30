import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import HomeScreen from './src/FlatList-Animation/FlatListAnimation';
import CardItem from './src/FlatList-Animation/CardItem';
import FlatListAnimation from './src/FlatList-Animation/FlatListAnimation';

const imageURI = require('./assets/post1.jpeg');
const title = 'aaaaaaaaaaaaaaa';


/* */
const deviceWidth = Math.round(Dimensions.get('window').width)

export default function App() {
  return (
    <FlatList
      data={seedDataHomeCard}
      keyExtractor={(data) => data.id.toString()} 
      renderItem={({ item } : {item: any}) => {
        <View style={{ flexDirection: 'row', padding: 20, backgroundColor: "red", borderRadius: 16 }}>

          <Image source={imageURI} style={{ width: deviceWidth - 40, height: 150, borderRadius: 20 }} />

        </View>
      }}
    />
// https://www.youtube.com/watch?v=F8x-dyIsrJ8&ab_channel=CatalinMiron
/* sliku treba stilizovati da  ima sencenje i sve potrebno ili druga opcija jeste upakovati je u view i da zauzem dimenzije view-a googlati kako da slika zauzme dimenzije view-a
tako mozemo iskorititi view koji je napravljen u videu i samo da background to view-a bude slika mozda da se ne ubacuje kao image */

  );
}

const seedDataHomeCard = [
  {
    id: 1,
    imageURI: imageURI,
    title: 'Disanje',
  },
  {
    id: 2,
    imageURI: imageURI,
    title: 'Disanje',
  },
  {
    id: 3,
    imageURI: imageURI,
    title: 'Disanje',
  },
  {
    id: 4,
    imageURI: imageURI,
    title: 'Disanje',
  },
];

// <FlatListAnimation/>
// <CardItem key={imageURI} imageURI={imageURI} title={title}/>



//*************************** Splash Screen ***************************//
// external libraries ==> expo install react-native-safe-area-context
/*
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/Splash-Screen-Animation/SplashScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SplashScreen/>
    </SafeAreaProvider>
  );
}
*/




