import React from 'react'
import { useAppSelector } from '../../hooks/appRedux';
import { selectGetPicture } from '../../redux/imgs/selectors'
import { Image, Platform, StyleSheet, View } from 'react-native'
import { Basic } from "unsplash-js/dist/methods/photos/types";

const Picture = () => {
  const pictureInfoSelector = useAppSelector(selectGetPicture) as Basic

  const { urls } = pictureInfoSelector;

  const styles = Platform.OS === 'web' ? webStyles : mobileStyles;

  return (
    <View>
      <Image source={{ uri: urls.raw }} style={styles.img} />
    </View>
  )
};

export default Picture

const webStyles = StyleSheet.create({
  img: {
    width: `100%`, 
    height: 800, 
    resizeMode: "stretch"
  },
});

const mobileStyles = StyleSheet.create({
  img: {
    width: `100%`,
    height: `100%`,
    resizeMode: "cover"
  },
});
