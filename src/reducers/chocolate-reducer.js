const initialState = {
	chocolates: [],
	chocolate: {}
}

const chocolateReducer = (state = initialState, action) => {
	switch(action.type) {
		case "GET_CHOCOLATES_SUCCESS":
			return Object.assign({}, state, {chocolates: action.chocolates})
		case "GET_SINGLE_CHOCOLATE_SUCCESS":
			return Object.assign({}, state, {chocolate: action.chocolate})
	}

	return state

}

export default chocolateReducer