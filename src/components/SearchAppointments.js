import React, { Component } from 'react';

class SearchAppointments extends Component {
  render() {
    return (
      <div className="search-appointments row justify-content-center my-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              id="SearchApts"
              type="text"
              className="form-control"
              aria-label="Search Appointments"
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button className="sort-by dropdown-item" href="#">
                  Pet Name
                </button>
                <button className="sort-by dropdown-item" href="#">
                  Date
                </button>
                <button className="sort-by dropdown-item" href="#">
                  Owner
                </button>
                <div role="separator" className="dropdown-divider" />
                <button className="sort-by dropdown-item" href="#">
                  Asc
                </button>
                <button className="sort-by dropdown-item" href="#">
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAppointments;
