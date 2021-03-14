/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './AddNew.css';
import { Link } from 'react-router-dom';

const AddNew = ({ addNewVocab }) => {
  const [word, setWord] = useState('');
  const [sentence, setSentence] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addNewVocab({ word, sentence });
    alert('Hurray ! Your word is added');
  };
  return (
    <div>
      <h1>Add a new word</h1>
      <div>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="word">Word</label>
          <input type="text" value={word} name="word" onChange={(event) => { setWord(event.target.value); }} required placeholder="Enter new word" />

          <label htmlFor="sentence">Sentence</label>
          <input type="text" value={sentence} name="sentence" onChange={(event) => { setSentence(event.target.value); }} required placeholder="Enter the sentence" />

          <input type="submit" value="Submit" />
        </form>
      </div>
      <Link to="/allwords"><button type="button">Go Back</button></Link>
    </div>
  );
};

export default AddNew;
