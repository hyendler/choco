import React from 'react'
import Header from './Header'
import * as chocolateApi from '../api/chocolates-api'
import store from '../store'
import { connect } from 'react-redux';


const ChocolateDetailsPage = React.createClass({
	componentDidMount: function () {
		let chocolateId = this.props.params.chocolateId
		chocolateApi.getSingleChocolate();
	},
	render() {
		const {name, company, beanOrigin, percentage, variety, rating, notes, img} = this.props.chocolate;
		return (
			<div>
				<Header />
				<div className="container">
					<h1>{name}</h1>
					<h1>{company}</h1>
					<h3>{beanOrigin}</h3>
					<h3>{percentage}</h3>
					<h3>{variety}</h3>
					<h3>{rating}</h3>
					<h3>{notes}</h3>
					<img src={`imgs/${img}`} />

				</div>
			</div>
		)
	}
})

const mapStateToProps = function(store) {
	return {
		chocolate: store.chocolateState.chocolate
	}
}


module.exports = connect(mapStateToProps)(ChocolateDetailsPage)