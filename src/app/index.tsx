import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Root } from 'app/containers/Root';

// render react DOM
export const App = hot(module)(({ history }) => (
    <Router history={history}>
	  <Root>
	      <Switch>
	        <Route path="/" component={()=>{return null}} />
	      </Switch>
	  </Root>
    </Router>
));
