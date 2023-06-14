import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Placement Management
          </Link>
          <div class="d-grid gap-2 d-md-block">
          <Link className="btn btn-outline-light me-md-2" to="/home">
            Student List
          </Link>
          <Link className="btn btn-outline-light" to="/adduser">
            Add Students
          </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
