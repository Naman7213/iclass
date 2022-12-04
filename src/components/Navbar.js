import React from "react";
import logo from "../media/logo.png";
import avatar from "../media/avatar.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img src={logo} alt="site logo" height="80px" width="100px" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            &nbsp;&nbsp;&nbsp;
            {/* DropDown */}
            <div class="dropdown">
              <a
                class="btn btn-secondary dropdown-toggle"
                href="www.google.com"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a class="dropdown-item" href="www.google.com">
                    Spanish
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="www.google.com">
                    German
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="www.google.com">
                    Chinese
                  </a>
                </li>
              </ul>
            </div>
            {/* DropDown */}&nbsp;&nbsp;&nbsp;
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>
                <img
                  src={avatar}
                  alt="user avatar"
                  height="60px"
                  width="60px"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              &nbsp;&nbsp;
              <div>
                <p>Name</p>
                <p>Admin</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
