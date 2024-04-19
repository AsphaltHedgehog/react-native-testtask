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
    
    <View style={styles.card}>
      <Pressable onPress={handlePress}>
        <Image source={{ uri: img }} style={styles.img} alt={altDescr} />
      </Pressable>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{author}</Text>
        <Text style={styles.text}>{descr}</Text>
      </View>
    </View>
    
  )
};

export default ImgsCard


const styles = StyleSheet.create({
  img: {
    width: `100%`,
    height: 200,
    resizeMode: 'cover',
    position: 'absolute',
  },
  card: {
    width: 400,
    minHeight: 235,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#979595',
    borderRadius: 8,
    padding: 16,
    position: 'relative',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  textWrapper: {
    position: 'absolute',
    bottom: 30,
    right: `10%`,
    maxHeight: 55,
    maxWidth: 180,
    overflow: 'hidden'
  },
});