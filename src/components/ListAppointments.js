import React, { Component } from 'react';

class ListAppointments extends Component {
  render() {
    return (
      <div className="appointment-list item-list mb-3">
        {this.props.appointments.map(item => (
          <div className="pet-item col media py-3">
            <div className="mr-3">
              <button className="pet-delete btn btn-sm btn-danger">X</button>
            </div>

            <div className="pet-info media-body">
              <div className="pet-head d-flex">
                <span className="pet-name">{item.petName}</span>
                <span className="apt-date ml-auto">{item.aptDate}</span>
              </div>

              <div className="owner-name">
                <span className="label-item">Owner: </span>
                <span>{item.ownerName}</span>
              </div>
              <div className="apt-notes">{item.aptNotes}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListAppointments;
