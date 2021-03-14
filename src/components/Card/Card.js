/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Card.module.css';

const Card = ({ vocab }) => (
  <div className={styles.card}>

    <div className={styles.container}>

      <h4><b>{vocab.word}</b></h4>
      <p>{vocab.sentence}</p>
    </div>

  </div>
);

export default Card;
