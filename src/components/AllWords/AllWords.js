import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const AllWords = ({ Vocab }) => (
  <div>
    <h1>welcome back</h1>
    {
      Vocab.map((vocab) => (
        <div key={vocab}>

          <Card vocab={vocab} />
        </div>
      ))
    }

    <Link to="/"><button type="button">Go Back</button></Link>
    <Link to="/new-word"><button type="button">Add New Word</button></Link>
  </div>
);

const vocabShape = {
  map: PropTypes.func.isRequired,
};

AllWords.propTypes = {

  Vocab: PropTypes.arrayOf(PropTypes.shape(vocabShape)).isRequired,
};
export default AllWords;
