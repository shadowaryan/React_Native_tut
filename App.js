import { StatusBar } from 'expo-status-bar';
import { ImageBackground,Text, View, Button } from 'react-native';
import Body from './components/body';
import Header from './components/header';

import { AppRegistry } from 'react-native';


function App() {
  

  const image = {uri: 'https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/330757218_2998578600437213_7838478984784915687_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=kL9JTLugpiQAX8y6nNT&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAzODY0OTMzMjM5MzQ4NjEyOQ%3D%3D.2-ccb7-5&oh=00_AfDPIwY6bGYhr31ygBZ1Kn4PLr3_jlbnOdBDm9LyDII2aA&oe=643D4E1D&_nc_sid=1527a3'};

  return (
    <View className="flex-1">
      <ImageBackground source={image} className="flex-1">
        <Header/>
       <Body/>
        
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

AppRegistry.registerComponent('main',() => App);

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
