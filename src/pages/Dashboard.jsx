import React from "react";


function Dashboard() {
  return (
    <div className="container-fluid p-4 bg-light" style={{ minHeight: "100vh" }}>
      
      {/* Page Title */}
      <h2 className="mb-4 fw-bold">Admin Dashboard</h2>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted">Total Patients</h6>
              <h3 className="fw-bold text-primary">120</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted">Doctors</h6>
              <h3 className="fw-bold text-success">15</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted">Appointments Today</h6>
              <h3 className="fw-bold text-warning">32</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted">Pending Cases</h6>
              <h3 className="fw-bold text-danger">8</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Appointments Table */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5 className="mb-3">Recent Appointments</h5>

          <table className="table table-hover align-middle">
            <thead className="table-success">
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul Patil</td>
                <td>Dr. Sharma</td>
                <td>21 Feb 2026</td>
                <td>
                  <span className="badge bg-success">Confirmed</span>
                </td>
                <td>
                  <button className="btn btn-info btn-sm me-2">View</button>
                  <button className="btn btn-danger btn-sm">Cancel</button>
                </td>
              </tr>

              <tr>
                <td>Priya Desai</td>
                <td>Dr. Kulkarni</td>
                <td>22 Feb 2026</td>
                <td>
                  <span className="badge bg-warning text-dark">Pending</span>
                </td>
                <td>
                  <button className="btn btn-info btn-sm me-2">View</button>
                  <button className="btn btn-danger btn-sm">Cancel</button>
                </td>
              </tr>

              <tr>
                <td>Amit Joshi</td>
                <td>Dr. Mehta</td>
                <td>23 Feb 2026</td>
                <td>
                  <span className="badge bg-danger">Cancelled</span>
                </td>
                <td>
                  <button className="btn btn-info btn-sm me-2">View</button>
                  <button className="btn btn-secondary btn-sm">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;