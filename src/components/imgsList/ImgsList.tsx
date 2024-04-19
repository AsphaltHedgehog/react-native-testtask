import React from 'react'
import { selectGetImgs } from '../../redux/imgs/selectors'
import { useAppSelector } from '../../hooks/appDispatch'
import { FlatList } from 'react-native';

// components
import ImgsCard from '../imgsCard/ImgsCard'


const ImgsList = () => {
  const images = useAppSelector(selectGetImgs);

  return (
    <FlatList
      data={images}
      renderItem={({ item }) =>
        <ImgsCard id={item.id} img={item.links.download} author={item.user.name} descr={item.description} altDescr={item.alt_description}
        />}
      keyExtractor={(item) => item.id}
      
    />
  )
};

export default ImgsList