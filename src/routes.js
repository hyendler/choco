import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router'

import MasterPage from './pages/MasterPage'
import IndexPage from './pages/IndexPage'
import NewChocolatePage from './pages/NewChocolatePage'
import ChocolateDetailsPage from './pages/ChocolateDetailsPage'
import store from './store' 
import { Provider } from 'react-redux'

console.log(store)

const AppRouter = () => {
	return (
		<Provider store={store}>
			<Router history={browserHistory}>
		  	<Route path="/" component={MasterPage}>
					<IndexRoute store={store} component={IndexPage} />
					<Route path="/chocolates/new" component={NewChocolatePage} />
					<Route path="/chocolates/:id" component={ChocolateDetailsPage} />
				</Route>
			</Router>
		</Provider>
	)
}

export default AppRouter;