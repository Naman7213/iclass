import React, { useState } from "react";

const StudentEntry = () => {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [regno, setRegNo] = useState();
  const [age, setAge] = useState();

  const addStudent = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/dashboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, email, regno, age }),
    });
    if (res.status === 500 || !res) {
      window.alert("Registeration Failed");
    } else if (res.status === 409) {
      window.alert("Student regno already exists");
    } else if (res.status === 201) {
      window.alert("Student Created");
    }
  };
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Entry Form
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    FirstName
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    LastName
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    regno
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={regno}
                    onChange={(e) => setRegNo(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Age
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={addStudent}
                >
                  Submit
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentEntry;
