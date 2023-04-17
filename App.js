import { StatusBar } from 'expo-status-bar';
import { ImageBackground,Text, View, Button } from 'react-native';
import Body from './components/body';
import Header from './components/header';

// import { AppRegistry } from 'react-native';


export default function App() {
  

  const image = {uri: 'https://lh3.googleusercontent.com/u/6/drive-viewer/AAOQEOQC-QSIPFAcjqS-LVnQXMb7x7-dwDh__6PUFkFtR_i9tCCNbR8fmfb2IOweZ7MnJBi0sHo5hNfDF02Lc4zUgpoghTip3w=w1920-h906'};

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

// AppRegistry.registerComponent('main',() => App);

//  App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
