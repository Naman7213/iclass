import React, { useEffect, useState } from "react";
import avatar from "../media/avatar.png";
import StudentEntry from "./StudentEntry";
import StudentEditForm from "./StudentEditForm";

const Dashboard = () => {
  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data.data);
      setStudentsList(data.data);
    };
    getData();
  }, []);

  const deleteStudent = async (e, regno) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/dashboard", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ regno: regno }),
    });
    if (res.status === 200) {
      window.alert("Student Entry Deleted Successfully");
    } else if (res.status === 500) {
      window.alert("Server error, please try again");
    }
  };

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
      <StudentEditForm />
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
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Edit</th>
            <th scope="col">Mark Attandance</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {studentsList.map((object) => {
            return (
              <tr key={object._id}>
                <th scope="row">{object.regno}</th>
                <td>{object.firstname}</td>
                <td>{object.email}</td>
                <td>{object.age}</td>
                <td>
                  <i
                    class="fa-solid fa-user-pen"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <i
                    class="fa-solid fa-trash"
                    onClick={(e) => deleteStudent(e, object.regno)}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
