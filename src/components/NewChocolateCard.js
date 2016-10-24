import React from 'react'
import { Link } from 'react-router'

export default class NewChocolateCard extends React.Component {
	render () {
		return (
			<div className="newChocolateCard col-md-4">
				<div className="chocolateCard">
					<h3>Add a chocolate!</h3>
					<Link to="/chocolates/new"><i className="fa fa-plus-circle fa-5x"></i></Link>
				</div>
			</div>
		)
	}
}