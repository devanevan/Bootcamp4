import React from 'react';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};


class RemoveBuilding extends React.Component {

	handleSubmit = (e) => {
    e.preventDefault();
    //console.log(id);
    console.log("Building has been removed!");

    this.props.removeBuilding();
    this.props.selectedUpdate(-1);
  }

  render() {
    return (
			<form onSubmit={this.handleSubmit}>
			<button className = "btn btn-default"
      style = {
        buttonStyle
      }
      > Remove Selected Building! < /button>
			</form>
    );
  }
}
export default RemoveBuilding;
