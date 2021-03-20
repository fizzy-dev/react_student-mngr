import './../App.css';
import AddForm from './AddForm';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';

import React, { Component } from 'react';

import users from "./../data.json";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      hienThiForm:false,
      users:users
    }
  }
  thayDoiTrangThaiForm=()=>{
    this.setState({
      hienThiForm:!this.state.hienThiForm
    })
  }
  render() {
    return (
      <div>
        <Header hienThiForm={()=>this.thayDoiTrangThaiForm()}></Header>
        <div className="container">
          <div className="row">
            <Search></Search>
            <TableData users={this.state.users}></TableData>
            <AddForm hienThiForm={{curState:this.state.hienThiForm,changeState: this.thayDoiTrangThaiForm}}></AddForm>
          </div>
        </div>
      </div>
    );
  }
}

export default App;