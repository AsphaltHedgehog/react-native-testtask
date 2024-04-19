import React from 'react'
import { selectGetImgs } from '../../redux/imgs/selectors'
import { useAppSelector } from '../../hooks/appDispatch'
import { FlatList } from 'react-native-gesture-handler'
import ImgsCard from '../imgsCard/ImgsCard'

const ImgsList = () => {
  const images = useAppSelector(selectGetImgs);

  return (
    <FlatList
      data={images}
      renderItem={({ item }) => <ImgsCard id={item.id} img={item.links.download} author={item.user.name} descr={item.description} altDescr={ item.alt_description } />}
    />
  )
}

export default ImgsList