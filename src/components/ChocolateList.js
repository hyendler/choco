import React from 'react';
import ChocolateCard from '../components/ChocolateCard'
import * as chocolateApi from '../api/chocolates-api'
import store from '../store'
import { connect } from 'react-redux';

const ChocolateList = React.createClass({
	componentDidMount: function () {
		chocolateApi.getChocolates();
	},
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
})

const mapStateToProps = function(store) {
	return {
		chocolates: store.chocolateState.chocolates
	}
}

console.log("ChocolateList", ChocolateList)
console.log("ChocolateList mapStateToProps", connect(mapStateToProps))
console.log("ChocolateList mapStateToProps", connect(mapStateToProps)(ChocolateList))

export default connect(mapStateToProps)(ChocolateList)