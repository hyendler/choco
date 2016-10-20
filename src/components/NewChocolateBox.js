import React from 'react'

export default class NewChocolateBox extends React.Component {
	render () {
		return (
			<div className="newChocolateBox col-md-4">
				<div className="chocolateCard">
					<h3>Add a chocolate!</h3>
					<Link href="/chocolate"><i className="fa-plus-circle fa-5x"></i></Link>
				</div>
			</div>
		)
	}
}