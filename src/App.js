import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

Array.prototype.insert = function ( index, item ) {
    this.splice(index, 0, item );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: -1,
      dataList: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  removeBuilding() {
    var dataList2 = this.state.dataList

    var index = dataList2.indexOf(this.props.data[this.state.selectedBuilding]);
    if (index > -1) {
      dataList2.splice(index, 1);
    }

    this.setState({
      dataList: dataList2
    })
  }

  addBuilding(name, code, address) {
    var dataList2 = this.state.dataList
    dataList2.insert(this.state.dataList.length,
       {id: this.state.dataList.length + 1, code: code, name: name, address: address});
    this.setState({
      dataList: dataList2
    })
  }

  render() {
    console.log(this.state.datalist)
    return (
      <div class="bg px-0" >
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search filterUpdate={this.filterUpdate.bind(this)}/>

        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                <thead>
                    <tr>
                      <b>Code Building</b>
                    </tr>
                </thead>
                  <tbody>
                    <BuildingList
                      data={this.state.dataList}
                      filterText={this.state.filterText}
                      selectedUpdate={this.selectedUpdate.bind(this)}
                      />
                  </tbody>
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
              data={this.state.dataList}
              selectedBuilding={this.state.selectedBuilding}
              />
            </div>
            <div className="column1">
            <b>Add new building</b>
              <p>
                <AddBuilding
                  data={this.state.dataList}
                  addBuilding={this.addBuilding.bind(this)}
                />
              </p>
              <p>
                <RemoveBuilding
                  data={this.state.dataList}
                  selectedBuilding={this.state.selectedBuilding}
                  removeBuilding={this.removeBuilding.bind(this)}
                  selectedUpdate={this.selectedUpdate.bind(this)}
                />
              </p>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
