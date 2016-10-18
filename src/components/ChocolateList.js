import React from 'react';
import ChocolateCard from '../components/ChocolateCard'
import data from '../../build/data'

export default class ChocolateList extends React.Component {
	render() {
		return (
			<div className="chocolateList">
				{data.chocolates.map((chocolate) => (
					<ChocolateCard {...chocolate} key={chocolate.id} />
				))}
			</div>
		)
	}
}