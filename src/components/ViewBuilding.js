import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		//console.log(this.props.data[1]);
		//console.log(this.props.data[1].latitude);
		if (this.props.selectedBuilding === -1) {
			return (
				<div>
				<p>
				<i>Click on a name to view more information</i>
				</p>
				</div>
			);
		} else {
			return (
				<div>
				<p>
				SelectedBuilding <br></br>

				Building Name:  {this.props.data[this.props.selectedBuilding].name} <br></br>
				ID: {this.props.data[this.props.selectedBuilding].id} <br></br>
        Code: {this.props.data[this.props.selectedBuilding].code}<br></br>
        Address: {this.props.data[this.props.selectedBuilding].address}
				</p>
				</div>
			);
		}
	}
}
export default ViewBuilding;
