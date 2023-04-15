import { View, Text, TextInput, } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Button_login from './button_login';
// import { Button, Icon, WhiteSpace, WingBlank } from '@ant-design/react-native'

export default function Body() {

  const [username, setUsername] = useState("Unknown");
  const [password, setPassword] = useState("None");

  const sumbitHandler = () =>{
    return(
        <>
        <Text className="text-amber-100">Username = {username}, Password = {password}</Text>
    
        </>
    )
  }

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className="text-white pb-2 font-extrabold font">Enter Your Credentials:</Text>
      <Text className="text-amber-200 font-bold">User Name</Text>
      <TextInput 
      className="text-black border-dotted border-2 border-black p-2 m-2 w-48 border-spacing bg-gray-400" 
      placeholder='  eg- username'
      onChangeText={(e)=>setUsername(e)}/>
      <Text className="text-amber-200 font-bold">Password</Text>
      <TextInput 
      className="text-black border-dotted border-2 border-black p-2 m-2 w-48 border-spacing bg-gray-400" 
      placeholder='  eg- user1234'
    //   keyboardType='number-pad'
      onChangeText={(e)=>setPassword(e)}/>
      {/* <Button onPress={sumbitHandler} title="Sign In" className=""/> */}
      <Button_login/>
       {/* <Button type="primary">primary</Button> */}
      </View>
  )
}