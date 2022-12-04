import React from "react";
import avatar from "../media/avatar.png";
import StudentEntry from "./StudentEntry";

const Dashboard = () => {
  return (
    <div className="container">
      <div style={{ marginLeft: "-1000px" }}>
        <img
          src={avatar}
          alt="admin profile"
          style={{ height: "100px", width: "100px" }}
        />
        <p>Admin Name</p>
      </div>

      <StudentEntry />
      <div>
        <button
          className="btn btn-outline-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="fa-solid fa-user-plus"></i> Add Student
        </button>
      </div>
      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Student Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Mark Attandance</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>
              <i class="fa-solid fa-user-pen" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <i class="fa-solid fa-trash"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
