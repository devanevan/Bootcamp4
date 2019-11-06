import React from 'react';


class BuilingList extends React.Component {
/*
	constructor(props) {
    super(props);
    this.state = {
      dataList: this.props.data,
    };
  }
*/
	selectedUpdate = (e,name) => {
		e.preventDefault();
		//console.log(id);

		var index = this.props.data.map(item => item.name).indexOf(name);
		console.log(index)
		if(index !== -1) {
			 this.props.selectedUpdate(index);
		}
	}
	render() {
		console.log('This is my directory file', this.props);
		//console.log(this.props);
		const { data } = this.props;
		//console.log(this.props)
		const result = data.filter(building => building.name.includes(this.props.filterText))
		const buildingList = result.map(directory => {
			return (
				<div>
				<tr key={directory.id}>
					<td> {directory.code} </td>
					<td onClick={e => this.selectedUpdate(e,directory.name)}> {directory.name} </td>
				</tr>
				</div>
			);
		});
		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
