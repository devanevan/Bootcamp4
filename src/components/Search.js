import React from 'react';

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.input = React.createRef();
	}

	filterUpdate = e => {
		e.preventDefault();
		//Here you will need to update the value of the filter with the value from the textbox
		//console.log(this.input.current.value);
		this.props.filterUpdate(this.input.current.value);
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value

		return (
			<form onChange={e => this.filterUpdate(e)}>
				<input type="text" placeholder="Type to Filter" ref={this.input} />
			</form>
		);
	}

}
export default Search;
