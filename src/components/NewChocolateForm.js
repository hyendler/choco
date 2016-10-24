import React from 'react'

const NewChocolateForm = React.createClass({
	getInitialState: function () {
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
				<div class="form-group">
					<label>Company </label>
					<input type="text" class="form-control" value={this.props.company} onChange={this.handleChange('company')} />
				</div>
				<div class="form-group">
					<label>Name </label>
					<input type="text" class="form-control" value={this.props.name} onChange={this.handleChange('name')} />
				</div>
				<div class="form-group">
					<label>Origin of Beans </label>
					<input type="text" value={this.props.beanOrigin} onChange={this.handleChange('beanOrigin')} />
				</div>
				<div class="form-group">
					<label>Main Ingredients </label>
					<input type="text" value={this.props.ingredients} onChange={this.handleChange('ingredients')} />
				</div>
				<div class="form-group">
					<label>Percentage </label>
					<input type="text" value={this.props.percentage} onChange={this.handleChange('percentage')} placeholder="if none, type N/A" />
				</div>
				<div class="form-group">
					<label>Type of chocolate </label>
					<input type="text" value={this.props.variety} onChange={this.handleChange('variety')} placeholder="dark, milk, etc" />
				</div>
				<div class="form-group">
					<label>Notes/Flavors </label>
					<input type="text" value={this.props.notes} onChange={this.handleChange('notes')} placeholder="fruity, mild, spice" />
				</div>
				<div class="form-group">
					<label>Paste in an image url! </label>
					<input type="text" value={this.props.img} onChange={this.handleChange('img')} placeholder="image url" />
				</div>
				<div class="form-group">
					<label>Rating </label>
					<input type="text" value={this.props.rating} onChange={this.handleChange('rating')} placeholder="1 to 5" />
				</div>
				<button type="submit" class="btn btn-success">Submit</button>
			</form>
		)
	}
})

export default NewChocolateForm;