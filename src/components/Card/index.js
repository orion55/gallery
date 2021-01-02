import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import noImage from '../../assets/no-image.png';

function Card(props) {
  const { url, description, onRemove } = props;
  if (!url) return null;

  const handleImageError = (event) => {
    event.target.src = noImage;
  };

  return (
    <div className={`${styles.card} ${styles.masonryItem}`}>
      <img src={url} className={styles.masonryContent} alt={description} onError={handleImageError} />
      <div className={styles.card__popup}>
        {description && (<div className={styles.card__desc}>{description}</div>)}
        <button className={styles.card__btnremove} onClick={onRemove}>
          <FontAwesomeIcon icon={faTimes} className={styles.card__icon} size="1x" />
        </button>
      </div>
    </div>
  );
}

export default Card;
