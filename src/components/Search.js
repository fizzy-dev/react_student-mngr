import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="col-12">
                    <div className="searchForm">
                        <div className="form-group">
                            <div className="btn-group">
                                <input type="text" className="form-control" placeholder="Nhap tu khoa" />
                                <div className="btn btn-info">Search</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <hr />
                </div>
            </div>
        );
    }
}

export default Search;