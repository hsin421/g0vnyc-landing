import React from 'react';
import { render } from 'react-dom';
import ChPages from './components/Chinese/ChPages';
import LandingCH from './components/Chinese/LandingCH';
import LandingEN from './components/English/LandingEN';
import Staff from './components/Chinese/Staff';
import ScheduleCH from './components/Chinese/Schedule';
import SpeakersCH from './components/Chinese/Speakers';
import StaffEN from './components/English/StaffEN';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory} >
        <Route path="/" component={ChPages}>
          <IndexRoute component={LandingCH} />
          <Route path="/staff" component={Staff} />
          <Route path="/schedule" component={ScheduleCH} />
          <Route path="/speakers" component={SpeakersCH} />
        </Route>
        <Route path="/en" component={LandingEN}>
          <Route path="/staff" component={StaffEN} />
        </Route>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));