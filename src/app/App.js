import React, { useState, createRef, useRef } from 'react';
import ReduxToastr, { toastr } from 'react-redux-toastr';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import UploadButton from '../components/UploadButton';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import LocalStorageDB from '../services/localstorage';
import { checkUrl, checkSize, checkJson } from '../libs/check';
import { GALLERY } from '../constants/routes';

function App() {
  const [url, setUrl] = useState('');
  const fileInput = createRef();
  const history = useHistory();

  const showErrorMessage = (message) => {
    setTimeout(() => {
      toastr.error('Ошибка', message);
    }, 0);
  };

  const clearFields = () => {
    setUrl('');
    fileInput.current = null;
  };

  const goGallery = () => {
    clearFields();
    history.push(GALLERY);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { length, ...files } = fileInput.current.files;

    if (!url && length === 0) {
      showErrorMessage('Данные для загрузки не найдены!');
      return;
    }

    if (length !== 0) {
      checkSize(files[0])
        .then(() => checkJson(files[0]))
        .then((data) => LocalStorageDB.saveImages(data.images))
        .then(() => goGallery())
        .catch((err) => showErrorMessage(err.toString()));
    }

    if (url) {
      checkUrl(url)
        .then(() => LocalStorageDB.addImage(url))
        .then(() => goGallery())
        .catch((err) => showErrorMessage(err.toString()));
    }
  };

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
      <div className={styles.app}>
        <form className={styles.app__form}>
          <fieldset className={styles.app__fieldset}>
            <div className={styles.app__control_group}>
              <label htmlFor="url-input" className={styles.app__label}>
                Url
                <input
                  type="text"
                  id="url-input"
                  className={styles.app__input}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </label>
            </div>
            <div className={styles.app__control_group}>
              <label htmlFor="json-input" className={styles.app__label}>
                Json-файл
                <input type="file" id="json-input" className={styles.app__input} ref={fileInput} accept=".json" />
              </label>
            </div>
          </fieldset>
          <UploadButton onClick={handleSubmit} />
        </form>
      </div>
    </>
  );
}

export default App;
