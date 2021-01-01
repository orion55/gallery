import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import { useDispatch, useSelector } from 'react-redux';
import { MAIN } from '../../constants/routes';
import LocalStorageDB from '../../services/localstorage';
import styles from './styles.module.css';
import { loadImages, selectImages } from '../../slices/imageSlice';
import { checkLinks } from '../../libs/check';
import Loader from '../../components/Loader';

function Gallery() {
  const history = useHistory();
  const imagesItems = useSelector(selectImages);
  const dispatch = useDispatch();

  const goMain = () => {
    history.push(MAIN);
  };

  useEffect(() => {
    const images = LocalStorageDB.getImages();
    if (!images) goMain();
    dispatch(loadImages(images));
  }, []);

  return (
    <>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        getState={(state) => state.toastr}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        closeOnToastrClick
      />
      {imagesItems && imagesItems.length > 0 ? (
        <div className={styles.gallery}>
          <h1>Привет мир!</h1>
        </div>
      ) : <Loader />}
    </>
  );
}

export default Gallery;
