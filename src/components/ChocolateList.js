import React from 'react';
import ChocolateCard from '../components/ChocolateCard'

export default class ChocolateList extends React.Component {
	render() {
		return (
			<div className="chocolateList">
				{this.props.chocolates.filter((chocolate) => `${chocolate.name} ${chocolate.company} ${chocolate.variety} ${chocolate.notes} ${chocolate.beanOrigin}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
					.map((chocolate) => (
					<ChocolateCard {...chocolate} key={chocolate.id} />
				))}
			</div>
		)
	}
}