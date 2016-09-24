import React from 'react';
import { render } from 'react-dom';
import LandingCH from './components/LandingCH';
import LandingEN from './components/LandingEN';
import { Router, Route, browserHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={LandingCH} />
        <Route path="/en" component={LandingEN} />
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));