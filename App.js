import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground,Text, View, TextInput } from 'react-native';


export default function App() {
  const [name, setName] = useState("None");
  const [city, setCity] = useState("Unknown");

  const image = {uri: 'https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/330757218_2998578600437213_7838478984784915687_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=kL9JTLugpiQAX8y6nNT&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAzODY0OTMzMjM5MzQ4NjEyOQ%3D%3D.2-ccb7-5&oh=00_AfDPIwY6bGYhr31ygBZ1Kn4PLr3_jlbnOdBDm9LyDII2aA&oe=643D4E1D&_nc_sid=1527a3'};

  return (
    <View className="flex-1">
      <ImageBackground source={image} className="flex-1">
        <View className='flex-1 items-center justify-center'>
      <Text className="text-amber-100">Enter Your details</Text>
      <Text className="text-amber-100">Your Name: </Text>
      <TextInput 
      className="text-white border-dotted border-2 border-white p-2 m-2 w-48 border-spacing" 
      placeholder='  eg- Pagla Pranav'
      onChangeText={(e)=>setName(e)}/>
      <Text className="text-amber-100">City Name: </Text>
      <TextInput 
      className="text-white border-dotted border-2 border-white p-2 m-2 w-48 border-spacing" 
      placeholder='  eg- Pagla Pranav Ki Duniya'
      onChangeText={(e)=>setCity(e)}/>
      <Text className="text-amber-100">Name = {name}, City = {city}</Text>
      <StatusBar style="auto" />
      </View>
      </ImageBackground>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
