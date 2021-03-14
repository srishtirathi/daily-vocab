import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.home}>
    <h1>Daily Vocab!</h1>
    <h3>Learn a new word everyday</h3>
    <Link to="/allwords">
      {' '}
      <button type="button">Get Started</button>
    </Link>
  </div>
);

export default Home;
