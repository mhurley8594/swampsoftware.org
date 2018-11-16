import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { Container } from 'reactstrap';

import Portal from './components/Portal/Portal';
import Updates from './components/Updates/Updates';
import Info from './components/Info/Info';

class App extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Portal} />
            <Route exact={true} path="/updates" component={Updates} />
            <Route exact={true} path="/info" component={Info} />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
