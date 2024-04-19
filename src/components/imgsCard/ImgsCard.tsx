import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type Props = {
  id: string;
  img: string;
  author: string;
  descr: string;
  altDescr: string;
}

const ImgsCard = ({id, img, author, descr, altDescr}: Props) => {
  return (
    <View id={id} key={id}>
      <Image source={img} style={styles.img} alt={altDescr} height={ 68 } width={ 68 } />
      <Text>{ author }</Text>
      <Text>{ descr }</Text>
    </View>
  )
}

export default ImgsCard


const styles = StyleSheet.create({
  img: {
    width: 66,
    height: 58,
    resizeMode: 'stretch'
  },
});