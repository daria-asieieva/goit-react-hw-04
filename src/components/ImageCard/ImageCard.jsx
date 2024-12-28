import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  const { urls, alt_description } = image;

  return (
    <div className={styles.card}>
      <img src={urls.small} alt={alt_description || 'Image'} className={styles.image} />
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.object.isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
};

export default ImageCard;

