import React from 'react'
import { Text } from 'react-native'



const Pictures = ({ route }) => {
  return (
    <Text>{route.params.id}</Text>
  )
}

export default Pictures