import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    mappingData = () => this.props.users.map((value, key) => (
        <TableDataRow data={value}></TableDataRow>
    ))
    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Phone number</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;