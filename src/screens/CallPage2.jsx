



import { View, Text } from 'react-native'
import React from 'react'

const CallPage2 = ({route}) => {

    const {image, name} = route.params

  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default CallPage2