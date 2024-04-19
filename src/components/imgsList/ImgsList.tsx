import React from 'react'
import { selectGetImgs } from '../../redux/imgs/selectors'
import { useAppSelector } from '../../hooks/appRedux';
import { FlatList, StyleSheet } from 'react-native';

// components
import ImgsCard from '../imgsCard/ImgsCard'


const ImgsList = () => {
  const images = useAppSelector(selectGetImgs);

  return (
    <FlatList
      data={images}
      style={styles.container}
      contentContainerStyle={styles.flatListContent}
      renderItem={({ item }) =>
        <ImgsCard id={item.id} img={item.urls.small} author={item.user.name} descr={item.description} altDescr={item.alt_description}
        />}
      keyExtractor={(item) => item.id}
      
    />
  )
};

export default ImgsList


const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  flatListContent: {
    alignItems: 'center',
  }
});