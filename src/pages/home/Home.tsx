import React, { useEffect } from 'react'
import { selectGetImgs } from '../../redux/imgs/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/appRedux';
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
      <ImgsList />
    </>
  )
};

export default Home