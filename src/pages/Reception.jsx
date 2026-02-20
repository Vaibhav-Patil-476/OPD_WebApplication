import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBadge,
  MDBBtn
} from "mdb-react-ui-kit";


function Reception() {
  return (
    <div className="reception-container">
      <h2 className="page-title">Reception Dashboard</h2>

      <MDBTable className="custom-table" hover bordered>
        <MDBTableHead className="custom-head">
          <tr>
            <th>#</th>
            <th>Patient Name</th>
            <th>Doctor</th>
            <th>Appointment Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>

        <MDBTableBody>
          <tr>
            <th scope="row">1</th>
            <td>Rahul Patil</td>
            <td>Dr. Sharma</td>
            <td>21 Feb 2026</td>
            <td>
              <MDBBadge color="success" pill>
                Confirmed
              </MDBBadge>
            </td>
            <td>
              <button className="btn btn-info btn-sm me-2">
  View
</button>

<button className="btn btn-danger btn-sm">
  Cancel
</button>
            </td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>Priya Desai</td>
            <td>Dr. Kulkarni</td>
            <td>22 Feb 2026</td>
            <td>
              <MDBBadge color="warning" pill>
                Pending
              </MDBBadge>
            </td>
            <td>
             <button className="btn btn-info btn-sm me-2">
  View
</button>

<button className="btn btn-danger btn-sm">
  Cancel
</button>
            </td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>Amit Joshi</td>
            <td>Dr. Mehta</td>
            <td>23 Feb 2026</td>
            <td>
              <MDBBadge color="danger" pill>
                Cancelled
              </MDBBadge>
            </td>
            <td>
              <button className="btn btn-info btn-sm me-2">
  View
</button>

<button className="btn btn-danger btn-sm">
  Cancel
</button>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default Reception;