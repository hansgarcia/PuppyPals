import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PuppyList from './components/PuppyList.jsx';
import PuppyDetails from './components/PuppyDetails.jsx';
import PuppyForm from './components/PuppyForm.jsx';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={PuppyList} />
      <Route path="/puppy/:id" component={PuppyDetails} />
      <Route path="/new" component={PuppyForm} />
    </Switch>
  );
}

export default App;
