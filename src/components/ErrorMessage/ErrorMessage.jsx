import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => (
  <div className={styles.error}>
    <p>{message || 'An error occurred. Please try again later.'}</p>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
