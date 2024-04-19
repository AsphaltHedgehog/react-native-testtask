import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useAppDispatch } from '../../hooks/appDispatch'
import { fetchPictures } from '../../redux/imgs/operations'



const Pictures = ({ route }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
      dispatch(fetchPictures(route.params.id))
  }, []);


  return (
    <Text>{route.params.id}</Text>
  )
}

export default Pictures