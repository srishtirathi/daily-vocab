import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ vocab }) => (
  <div className={styles.card}>

    <div className={styles.container}>

      <h4><b>{vocab.word}</b></h4>
      <p>{vocab.sentence}</p>
    </div>

  </div>
);

Card.propTypes = {

  vocab: PropTypes.shape({
    word: PropTypes.string.isRequired,
    sentence: PropTypes.string.isRequired,

  }).isRequired,
};

export default Card;
