import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, ImageBackground } from 'react-native';
import HomeScreen from './src/FlatList-Animation/FlatListAnimation';
import CardItem from './src/FlatList-Animation/CardItem';
import FlatListAnimation from './src/FlatList-Animation/FlatListAnimation';
import SplashScreenAnimation from './src/Splash-Screen-Animation/SplashScreenAnimation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <FlatListAnimation/>
  );
}

//  <FlatListAnimation/>

/*
    <SafeAreaProvider>
      <SplashScreenAnimation/>
    </SafeAreaProvider>
*/



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




