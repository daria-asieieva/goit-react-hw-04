import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root'); 

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button className={styles.closeButton} onClick={onClose}>
        Close
      </button>
      <img src={image.urls.regular} alt={image.alt_description || 'Image'} />
      <p className={styles.description}>{image.description || 'No description'}</p>
      <p className={styles.author}>Author: {image.user?.name || 'Unknown'}</p>
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    urls: PropTypes.object.isRequired,
    alt_description: PropTypes.string,
    description: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

export default ImageModal;
