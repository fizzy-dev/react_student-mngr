import React, { Component } from 'react';

class AddForm extends Component {



    showForm = () => {
        if (this.props.hienThiForm.curState === true) {
            return (
                <div>
                    <div className="btn btn-block btn-outline-secondary" onClick={()=>this.props.hienThiForm.changeState()}>Dong lai</div>
                    <div className="card mt-2">
                        <img className="card-img-top" src="holder.js/100x180/" alt="" />
                        <div className="card-header text-center">Them moi thanh vien</div>
                        <div className="card-body">
                            <div className="form-group">
                                <input type="text" placeholder="Ten user" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Phone number" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <select className="form-control">
                                    <option value={1}>Admin</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>Default select</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div className="btn btn-block btn-primary">Add</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div className="btn btn-block btn-outline-info" onClick={()=>this.props.hienThiForm.changeState()}>Them moi</div>
        }
    }


    render() {
        return (
            <div className="col-3">
                {this.showForm()}
            </div>
        );
    }
}

export default AddForm;