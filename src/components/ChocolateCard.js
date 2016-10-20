import React from 'react';

export default class ChocolateCard extends React.Component {
	render() {
		return (
			<div className="col-md-4">
				<div className="chocolateCard">
					<h3>{this.props.name}</h3>
					<div className="row">
						<div className="col-md-7">
							<h5><strong>Origin: </strong>{this.props.beanOrigin}</h5>
						</div>
						<div className="col-md-5">
							<h5><strong>Percentage: </strong>{this.props.percentage}</h5>
						</div>
					</div>
					<div className="row">
						<div className="col-md-7">
							<h5><strong>Type: </strong>{this.props.variety}</h5>
						</div>
						<div className="col-md-5">
							<h5><strong>Rating: </strong>{this.props.rating}</h5>
						</div>
					</div>
					<p><strong>Notes: </strong>{this.props.notes}</p>
					<img src={`imgs/${this.props.img}`} />
				</div>
			</div>
		)
	}
}