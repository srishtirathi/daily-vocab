/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './AllWords.module.css';

const AllWords = ({ Vocab }) => {
  const history = useHistory();
  return (
    <div className={styles.allwords}>
      <h1>Welcome Back</h1>
      {
        Vocab.map((vocab) => (
          <button type="button">
            <div key={vocab}>
              <Card vocab={vocab} />
            </div>
          </button>
        ))
      }

      <Link to="/"><button type="button" className={styles.allwordsButton}>Go Back</button></Link>
      <Link to="/new-word"><button type="button" className={styles.allwordsButton}>Add New Word</button></Link>
    </div>
  );
};

const vocabShape = {
  map: PropTypes.func.isRequired,
};

AllWords.propTypes = {

  Vocab: PropTypes.arrayOf(PropTypes.shape(vocabShape)).isRequired,
};
export default AllWords;
