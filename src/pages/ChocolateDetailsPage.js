import React from 'react'
import Header from './Header'
import { connector } from '../store'


class ChocolateDetailsPage extends React.Component {
	assignChocolate(id) {
		id = parseInt(id)
		const chocolateArray = this.props.chocolates.filter((chocolate) => chocolate.id === id)
		return chocolateArray[0]
	}
	render() {
		const {name, company, beanOrigin, percentage, variety, rating, notes, img} = this.assignChocolate(this.props.params.id)
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
}

module.exports = connector(ChocolateDetailsPage)