import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router'
{ /* import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
*/ }
import MasterPage from './pages/MasterPage'
import IndexPage from './pages/IndexPage'
import NewChocolatePage from './pages/NewChocolatePage'


{ /* ReactStormpath.init(); */ }
const AppRouter = () => {
	return (
		<Router history={browserHistory}>
	  	<Route path="/" component={MasterPage}>
				<IndexRoute component={IndexPage} />
				{ /* <LoginRoute path='/login' component={LoginPage} />
				<Route path="/register" component={RegistrationPage} /> */ }
				<Route path="chocolates">
					<Route path="new" component={NewChocolatePage} />
				</Route>
			</Route>
		</Router>
	)
}

export default AppRouter;