import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './AllWords.module.css';

const AllWords = ({ Vocab }) => (
  <div className={styles.allwords}>
    <h1>Welcome Back</h1>
    {
      Vocab.map((vocab) => (
        <Link to="/update">
          <div key={vocab}>
            <Card vocab={vocab} />
          </div>
        </Link>
      ))
    }

    <Link to="/"><button type="button" className={styles.allwordsButton}>Go Back</button></Link>
    <Link to="/new-word"><button type="button" className={styles.allwordsButton}>Add New Word</button></Link>
  </div>
);

const vocabShape = {
  map: PropTypes.func.isRequired,
};

AllWords.propTypes = {

  Vocab: PropTypes.arrayOf(PropTypes.shape(vocabShape)).isRequired,
};
export default AllWords;
