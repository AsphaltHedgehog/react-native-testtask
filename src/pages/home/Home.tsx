import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { selectGetImgs } from '../../redux/imgs/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/appDispatch';
import { fetchImages } from '../../redux/imgs/operations';
import ImgsList from '../../components/imgsList/ImgsList';

const Home = () => {
  const images = useAppSelector(selectGetImgs)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (images.length < 1) {
      dispatch(fetchImages())
    }
  }, [images]);

  return (
    <>
      <Text>Home1dasda</Text>
      <ImgsList/>
      </>
  )
}

export default Home