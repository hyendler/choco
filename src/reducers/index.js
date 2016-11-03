import { combineReducers } from 'redux'

import chocolateReducer from './chocolate-reducer'

var reducers = combineReducers({
	chocolateState: chocolateReducer
})

export default reducers