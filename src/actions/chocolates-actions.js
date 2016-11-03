export function getChocolatesSuccess(chocolates) {
	return {
		type: "GET_CHOCOLATES_SUCCESS",
		chocolates
	}
}

export function getSingleChocolateSuccess(chocolate) {
	type: "GET_SINGLE_CHOCOLATE_SUCCESS",
	chocolate
}

export function postChocolateSuccess(chocolate) {
	type: "POST_CHOCOLATE_SUCCESS",
	chocolate
}