/* eslint-disable no-unused-vars */
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './components/Home/Home';
import './App.css';
import AllWords from './components/AllWords/AllWords';
import AddNew from './components/AddNew/AddNew';
import { getVocab, postVocab, updateVocab } from './utils/api';

const App = () => {
  // change case
  const [Vocab, setVocab] = useState([]);
  useEffect(async () => {
    const vocab = await getVocab();
    setVocab(vocab);
  }, []);
  const updateNewVocab = async (newVocab) => {
    await updateVocab(newVocab);

    const updatedVocab = [...Vocab, newVocab];

    setVocab(updatedVocab);
  };

  const addNewVocab = async (newVocab) => {
    await postVocab(newVocab);
    const updatedVocab = [...Vocab, newVocab];
    setVocab(updatedVocab);
  };

  return (
    <div className="app-body">
      <BrowserRouter>

        <Switch>

          <Route path="/allwords">

            <AllWords Vocab={Vocab} />
          </Route>
          <Route path="/new-word">
            <AddNew Vocab={Vocab} addNewVocab={addNewVocab} updateNewVocab={updateNewVocab} />
          </Route>
          <Route>
            <Home path="/" exact />
          </Route>

        </Switch>

      </BrowserRouter>

    </div>
  );
};

export default App;
