import axios from 'axios'
import store from '../store'
import { getChocolatesSuccess, getSingleChocolateSuccess, postChocolateSuccess } from '../actions/chocolates-actions'

export function getChocolates() {
	return axios.get('http://localhost:3000/api/chocolates')
	.then(res => {
		store.dispatch(getUsersSuccess(res.data));
		return res;
	})
}

export function getSingleChocolate(chocolateId) {
	let chocolate = {}
	return axios.get('http://localhost:3000/api/chocolates/' + chocolateId)
	.then(res => {
		let chocolate = res.data
		console.log(chocolate)
		store.dispatch(getSingleChocolateSuccess(chocolate));
		return res;
	})
}

export function createChocolate(chocolateData) {
	return axios.post('http://localhost:/api/chocolates', chocolateData)
	.then( res => {
		let chocolate = res.data
		console.log(chocolate)
		store.dispatch(postChocolateSuccess(chocolate))
		return res;
	})
}