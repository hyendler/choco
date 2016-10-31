import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router'

{ /* import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
*/ }
import MasterPage from './pages/MasterPage'
import IndexPage from './pages/IndexPage'
import NewChocolatePage from './pages/NewChocolatePage'
import ChocolateDetailsPage from './pages/ChocolateDetailsPage'
import { store } from './store' 
import { Provider } from 'react-redux'

{ /* ReactStormpath.init(); */ }
const AppRouter = () => {
	return (
		<Provider store={store}>
			<Router history={browserHistory}>
		  	<Route path="/" component={MasterPage}>
					<IndexRoute store={store} component={IndexPage} />
					{ /* <LoginRoute path='/login' component={LoginPage} />
					<Route path="/register" component={RegistrationPage} /> */ }
							<Route path="/chocolates/new" component={NewChocolatePage} />
						<Route path="/chocolates/:id" component={ChocolateDetailsPage} />
				</Route>
			</Router>
		</Provider>
	)
}

{ /* export default class AppRouter extends React.Component {
	assignChocolate (nextState, replace) {
		const chocoArray = chocolates.filter( (chocolate) => show.imdb === nextState.params.id )
		if (chocoArray.length < 1) {
			return replace('/')
		} 

		Object.assign(nextState.params, chocoArray[0])
		return nextState
	}
	render () {
		return (
			<Router history={browserHistory}>
		  	<Route path="/" component={MasterPage}>
					<IndexRoute component={IndexPage} data={data} />

					<Route path="/chocolates">
						<Route path="/new" component={NewChocolatePage} />
						<Route path="/chocolates/:id" component={ChocolateDetailsPage} onEnter={this.assignChocolate} />
					</Route>
				</Route>
			</Router>
		)
	}
}

*/}

export default AppRouter;