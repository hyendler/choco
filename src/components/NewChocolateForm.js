import React from 'react'

export default class NewChocolateForm extends React.Component {
	getInitialState: function() {
		return { company: '', beanOrigin: '', ingredients: '', percentage: '', variety: '', notes: '', img: '', rating: ''}
	},
	handleChange: function (key) {
		return function(e) {
			var state={};
			state[key] = e.target.value;
			this.setState(state);
		}.bind(this);
	},
	render() {
		return (
			<form className="newChocolateForm">
				<input type="text" value={this.props.company} onChange={this.handleChange('company') placeholder="company" />
				<input type="text" value={this.props.beanOrigin} onChange={this.handleChange('beanOrigin') placeholder="origin of beans" />
				<input type="text" value={this.props.ingredients} onChange={this.handleChange('ingredients') placeholder="main ingredients" />
				<input type="text" value={this.props.percentage} onChange={this.handleChange('percentage') placeholder="if none, type N/A" />
				<input type="text" value={this.props.variety} onChange={this.handleChange('variety') placeholder="dark, milk, etc" />
				<input type="text" value={this.props.notes} onChange={this.handleChange('notes') placeholder="fruity, mild, spice" />
				<input type="text" value={this.props.img} onChange={this.handleChange('img') placeholder="image url" />
				<input type="text" value={this.props.rating} onChange={this.handleChange('rating') placeholder="1 to 5" />
				<input type="submit" />
			</form>
		)
	}
}