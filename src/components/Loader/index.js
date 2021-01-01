import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <FontAwesomeIcon icon={faSpinner} className={styles.loader__icon} size="2x" />
    </div>
  );
}

export default Loader;
