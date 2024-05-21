import React from 'react';
import { BrowserRouter as Router, Route, Dom } from 'react-router-dom';
import PuppyList from './components/PuppyList.jsx';
import PuppyDetails from './components/PuppyDetails.jsx';
import PuppyForm from './components/PuppyForm.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PuppyList} />
        <Route path="/puppy/:id" component={PuppyDetails} />
        <Route path="/new" component={PuppyForm} />
      </Switch>
    </Router>
  );
}

export default App;
