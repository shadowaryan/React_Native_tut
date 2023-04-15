import { View, Text } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View className="h-24 pt-9 bg-red-500">
      <Text className="text-center justify-center pt-4 font-bold text-xl">Rocketo</Text>
    </View>
  )
}