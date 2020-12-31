import React, { useState, createRef } from 'react';
import ReduxToastr, { toastr } from 'react-redux-toastr';
import styles from './styles.module.css';
import UploadButton from '../components/UploadButton';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

function App() {
  const [url, setUrl] = useState('');
  const fileInput = createRef();

  const showErrorMessage = (title, message) => {
    setTimeout(() => {
      toastr.error(title, message);
    }, 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { length, ...files } = fileInput.current.files;
    let flagErr = false;

    if (!url && length === 0) {
      showErrorMessage('Ошибка', 'Данные для загрузки не найдены!');
      return;
    }

    if (url) {
      const myRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
      if (!myRegex.test(url)) {
        showErrorMessage('Ошибка', 'Ссылка не является картинкой!');
        flagErr = true;
      }
    }

    if (length !== 0) {
      const size = (files[0].size / 1024 / 1024).toFixed(2);
      if (size > 1) {
        showErrorMessage('Ошибка', 'Размер файла не должен превышать 1Mb');
        flagErr = true;
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsText(files[0], 'UTF-8');

      fileReader.onload = (e) => {
        try {
          const value = JSON.parse(e.target.result);
        } catch (err) {
          showErrorMessage('Ошибка', err.toString());
          flagErr = true;
        }
      };

      fileReader.onerror = () => {
        showErrorMessage('Ошибка', fileReader.error);
        flagErr = true;
      };
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
