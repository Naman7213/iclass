import React, { useEffect, useState } from "react";
import avatar from "../media/avatar.png";
import StudentEntry from "./StudentEntry";
import StudentEditForm from "./StudentEditForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [studentsList, setStudentsList] = useState([]);
  const [adminDetails, setAdminDetails] = useState([]);

  useEffect(() => {
    const getStudentData = async () => {
      const res = await fetch(
        "http://localhost:5000/student",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setStudentsList(data.data);
    };
    getStudentData();
  }, []);

  useEffect(() => {
    const getAdminData = async () => {
      const res = await fetch(
        "http://localhost:5000/admin",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setAdminDetails(data.data);
    };
    getAdminData();
  }, []);

  const deleteStudent = async (e, regno) => {
    e.preventDefault();
    const res = await fetch(
      "http://localhost:5000/student",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ regno: regno }),
      }
    );
    if (res.status === 200) {
      (function () {
        toast.success("Student Entry Deleted, Please refresh the page !", {
          position: toast.POSITION.TOP_CENTER,
        });
      })();
    } else if (res.status === 500) {
      window.alert("Server error, please try again");
    }
  };

  const present = async (regno) => {
    const res = await fetch(
      "http://localhost:5000/admin/markpresent",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ regno }),
      }
    );
    if (res.status === 200) {
      (function () {
        toast.success("Student Marked Present", {
          position: toast.POSITION.TOP_CENTER,
        });
      })();
    } else {
      window.alert("Please Mark again");
    }
  };

  const absent = async (regno) => {
    const res = await fetch(
      "http://localhost:5000/admin/markabsent",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ regno }),
      }
    );
    if (res.status === 200) {
      (function () {
        toast.success("Student Marked Absent", {
          position: toast.POSITION.TOP_CENTER,
        });
      })();
    } else {
      window.alert("Please Mark again");
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div style={{ marginLeft: "-1000px" }}>
        <img
          src={avatar}
          alt="admin profile"
          style={{ height: "100px", width: "100px" }}
        />
        <p>
          {adminDetails.length === 0
            ? "Admin Name"
            : adminDetails[0].firstname + " " + adminDetails[0].lastname}
        </p>
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
                  <button
                    className="btn btn-primary"
                    onClick={() => present(object.regno)}
                  >
                    P
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => absent(object.regno)}
                  >
                    A
                  </button>
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
      <button className="btn btn-success">Save</button>
    </div>
  );
};

export default Dashboard;
