import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-3">Quan ly sinh vien</h1>
                    <p className="lead">by ReactJS</p>
                    <hr className="my-2" />
                </div>
                <div className="btn btn-info" onClick={()=>this.props.hienThiForm()}>test button</div>
            </div>
        );
    }
}

export default Header;