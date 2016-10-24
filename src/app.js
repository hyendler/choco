import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import MasterPage from './pages/MasterPage'
import LoginPage from './pages/LoginPage'
import IndexPage from './pages/IndexPage'
import RegistrationPage from './pages/RegistrationPage'
import NewChocolatePage from './pages/NewChocolatePage'



ReactStormpath.init();
ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={MasterPage}>
  		<IndexRoute component={IndexPage} />
  		<LoginRoute path='/login' component={LoginPage} />
  		<Route path="/register" component={RegistrationPage} />
  		<Route path="chocolates">
  			<Route path="new" component={NewChocolatePage} />
  		</Route>
  	</Route>
  </Router>,
  document.getElementById('app-container')
);