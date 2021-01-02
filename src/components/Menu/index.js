import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import { MAIN } from '../../constants/routes';

function Menu() {
  const history = useHistory();

  return (
    <div className={styles.menu}>
      <button className={styles.menu__item} onClick={() => history.push(MAIN)}>
        <FontAwesomeIcon icon={faHome} className={styles.menu__icon} size="1x" />
      </button>
    </div>
  );
}

export default Menu;
