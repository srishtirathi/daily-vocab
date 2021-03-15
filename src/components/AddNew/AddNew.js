/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './AddNew.module.css';

const AddNew = ({ addNewVocab }) => {
  const [word, setWord] = useState('');
  const [sentence, setSentence] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addNewVocab({ word, sentence });
    alert('Hurray ! Your word is added');
  };
  return (
    <div className={styles.addnewCard}>
      <h1>Add a new word</h1>
      <div className={styles.formCard}>
        <form onSubmit={onSubmitHandler}>
          <label>Word</label>
          <input type="text" value={word} name="word" onChange={(event) => { setWord(event.target.value); }} required placeholder="Enter new word" />
          <br />
          <label>Sentence</label>
          <input type="text" value={sentence} name="sentence" onChange={(event) => { setSentence(event.target.value); }} required placeholder="Enter the sentence" />
          <br />
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
      <Link to="/allwords"><button type="button">Go Back</button></Link>
    </div>
  );
};
AddNew.propTypes = {
  addNewVocab: PropTypes.func.isRequired,

};

export default AddNew;
