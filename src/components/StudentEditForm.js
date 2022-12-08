import React, { useState } from "react";

const StudentEditForm = () => {
  const [firstname, setFirstName] = useState("");
  const [regno, setRegNo] = useState("");
  const [age, setAge] = useState("");

  const editStudent = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/student", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, regno, age }),
    });
    if (res.status === 200) {
      window.alert("Student Entry Edited");
    } else if (res.status === 500) {
      window.alert("Server Error, Do the operation again");
    }
  };
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Form
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
                  onClick={editStudent}
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

export default StudentEditForm;
