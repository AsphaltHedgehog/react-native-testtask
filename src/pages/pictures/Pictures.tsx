import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/appRedux'
import { fetchPictures } from '../../redux/imgs/operations'
import Picture from '../../components/picture/Picture'
import { selectGetPicture } from '../../redux/imgs/selectors'



const Pictures = ({ route }) => {
  const dispatch = useAppDispatch()
  const pictureInfoSelector = useAppSelector(selectGetPicture)

  useEffect(() => {
    dispatch(fetchPictures(route.params.id))
  }, []);


  return (
    <>
      {pictureInfoSelector && Object.keys(pictureInfoSelector).length > 0 && <Picture/>}
    </>
  )
};

export default Pictures