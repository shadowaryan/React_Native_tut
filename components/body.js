import { View, Text, TextInput, } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Button_login from './button_login';

export default function Body() {

  const [username, setUsername] = useState("Unknown");
  const [password, setPassword] = useState("None");

  const sumbitHandler = () =>{
    return(console.log(username,password))
  }

  return (
    <View className='pt-28 items-center justify-center'>
      
      <Text className="pt-1 pb-2 font-bold text-xl">Enter Your Credentials:</Text>

      <Text className="font-bold text-lg">User Name</Text>
      <TextInput 
      className="text-black border-dotted border-2 border-black p-2 m-2 w-48 border-spacing bg-white" 
      placeholder='  eg- username'
      onChangeText={(e)=>setUsername(e)}/>
      
      <Text className="font-bold text-lg">Password</Text>
      <TextInput 
      className="text-black border-dotted border-2 border-black p-2 m-2 w-48 border-spacing bg-white" 
      placeholder='  eg- user1234'
      onChangeText={(e)=>setPassword(e)}/>
      {/* <Text className="text-blue-50"> User - {username} , Password - {password} </Text> */}

      <Button_login className="" username = {username} password={password}/>

      </View>
  )
}