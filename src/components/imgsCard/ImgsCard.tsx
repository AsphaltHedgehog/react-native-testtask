import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

type Props = {
  id: string;
  img: string;
  author: string;
  descr: string;
  altDescr: string;
}

const ImgsCard = ({ id, img, author, descr, altDescr }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const handlePress = () => {
    navigation.navigate('Pictures', { id: id });
  };
  
  return (
    
    <View>
      <Pressable onPress={handlePress}>
        <Image source={{ uri: img }} style={styles.img} alt={altDescr} />
      </Pressable>
      <Text>{author}</Text>
      <Text>{descr}</Text>
    </View>
    
  )
};

export default ImgsCard


const styles = StyleSheet.create({
  img: {
    width: `100%`,
    height: 200,
    resizeMode: 'cover'
  },
});