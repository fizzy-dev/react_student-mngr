import React, { Component } from 'react';

class TableDataRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.phone}</td>
                <td>{this.props.data.role}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-info">Edit</div>
                        <div className="btn btn-warning">Delete</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;