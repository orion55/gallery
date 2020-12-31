import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

function UploadButton(props) {
  const { onClick } = props;
  return (
    <div className={styles.upbtn__wrap}>
      <button className={styles.upbtn} onClick={onClick}>
        <FontAwesomeIcon icon={faUpload} className={styles.upbtn__icon} size="1x" />
        <div className={styles.upbtn__text}>Загрузить</div>
      </button>
    </div>
  );
}

export default UploadButton;
