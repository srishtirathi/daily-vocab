import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home/Home';
import './App.css';
import AllWords from './components/AllWords/AllWords';
import AddNew from './components/AddNew/AddNew';

const App = () => {
  const [Vocab, setVocab] = useState([]);

  const addNewVocab = (newVocab) => {
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
            <AddNew Vocab={Vocab} addNewVocab={addNewVocab} />
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
