import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import { useDispatch, useSelector } from 'react-redux';
import { MAIN } from '../../constants/routes';
import LocalStorageDB from '../../services/localstorage';
import styles from './styles.module.css';
import {
  load, selectImages, remove, clear,
} from '../../slices/imageSlice';
import Loader from '../../components/Loader';
import Card from '../../components/Card';
import Menu from '../../components/Menu';

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
    dispatch(clear());
    dispatch(load(images));
  }, []);

  const handleRemove = (event, id) => {
    event.preventDefault();
    dispatch(remove(id));
    LocalStorageDB.removeImage(id);
  };

  const getCards = () => imagesItems.map((item) => (
    <Card
      {...item}
      key={item.id}
      onRemove={(event) => handleRemove(event, item.id)}
    />
  ));

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
        <>
          <Menu />
          <div className={styles.gallery__wrapper}>
            <div className={`${styles.gallery} ${styles.masonry}`}>
              {getCards()}
            </div>
          </div>
        </>
      ) : <Loader />}
    </>
  );
}

export default Gallery;
