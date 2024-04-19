import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/appDispatch'
import { fetchPictures } from '../../redux/imgs/operations'
import Picture from '../../components/picture/Picture'
import { selectGetPicture, selectIsLoading } from '../../redux/imgs/selectors'
import { Text } from 'react-native'
import { Basic } from "unsplash-js/dist/methods/photos/types";


const Pictures = ({ route }) => {
  const dispatch = useAppDispatch()
  const isLoadingSelector = useAppSelector(selectIsLoading)
  const pictureInfoSelector = useAppSelector(selectGetPicture)

  useEffect(() => {
    dispatch(fetchPictures(route.params.id))
  }, []);


  return (
    <>
      {isLoadingSelector && <Text>Loading...</Text>}
      {pictureInfoSelector && Object.keys(pictureInfoSelector).length > 0 && <Picture/>}
    </>
  )
};

export default Pictures