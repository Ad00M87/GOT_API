import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import { Segment, Divider } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Segment basic style={{backgroundColor: '#333', minHeight: '100vh'}}>
        <NavBar />
        <Divider />
        <Flash />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={NoMatch} />
          </Switch>
      </Segment>
    );
  }
}

export default App;
