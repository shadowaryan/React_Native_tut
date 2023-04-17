import { StatusBar } from 'expo-status-bar';
import { ImageBackground,Text, View, Button } from 'react-native';
import Body from './components/body';
import Header from './components/header';

// import { AppRegistry } from 'react-native';


export default function App() {
  

  const image = {uri: 'https://lh3.googleusercontent.com/u/6/drive-viewer/AAOQEOSz8Gu3KeT0vxdE6idxiAG5P20QWXzcSavvhT9Sb4RE5VP7gT-17sFluhWkEEVgDOTQFc_0lkfaJrFf88Xlw9fz6AjF=w1158-h906'};

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
