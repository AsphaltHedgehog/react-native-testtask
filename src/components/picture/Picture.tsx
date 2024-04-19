import React from 'react'
import { useAppSelector } from '../../hooks/appDispatch'
import { selectGetPicture } from '../../redux/imgs/selectors'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Basic } from "unsplash-js/dist/methods/photos/types";

const Picture = () => {
  const pictureInfoSelector = useAppSelector(selectGetPicture) as Basic

  const { links, user, description } = pictureInfoSelector;

  return (
    <View>
      <Image source={{ uri: links.download }} style={styles.img} />
      {user && <Text>{user.name}</Text>}
      {description && <Text>{description}</Text>}
    </View>
  )
};

export default Picture



const styles = StyleSheet.create({
  img: {
    width: `100%`,
    height: `100%`,
    resizeMode: 'contain'
  },
});
