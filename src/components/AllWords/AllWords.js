/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const Home = ({ Vocab }) => (
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

export default Home;
