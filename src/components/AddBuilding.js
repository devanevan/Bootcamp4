import React from 'react';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

class AddBuilding extends React.Component {

  constructor() {
    super();

    this.state = {
			name: '',
      code: '',
			address: ''
    }
  }
  handleNameChange = (e) => {
    e.preventDefault();
		this.setState({
			name: e.target.value
		});
  }

	handleCodeChange = (e) => {
    e.preventDefault();
		this.setState({
			code: e.target.value
		});
  }

	handleAddressChange = (e) => {
    e.preventDefault();
		this.setState({
			id: e.target.value
		});
  }

	handleSubmit = (e) => {
		e.preventDefault();
		const { name, code, address} = this.state;
		console.log("Name: " + name + " Code: " + code + " Address: " + address);
		console.log("Building has been added!");
		this.props.addBuilding(name, code, address);
	}

  render() {
    return (
			<form onSubmit={this.handleSubmit}>
			<input
				value={this.state.name}
				onChange={this.handleNameChange}
				placeholder='Enter name'
			/>
			<input
				value={this.state.code}
				onChange={this.handleCodeChange}
				placeholder='Enter code'
			/>
			<input
				value={this.state.id}
				onChange={this.handleAddressChange}
				placeholder='Enter address'
			/>
			<button className = "btn btn-default"
      style = {
        buttonStyle
      }
      > Submit! < /button>
			</form>
    );
  }
}
export default AddBuilding;
