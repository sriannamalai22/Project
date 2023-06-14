import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    college: "",
    roll:"",
    qualification:"",
    course:"",
    year:"",
    certificate:"",
    hallticketno:""
  });

  const { name, college, roll, qualification, course , year, certificate, hallticketno} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/students/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/students/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="College" className="form-label">
              College
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter College"
                name="college"
                value={college}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Roll" className="form-label">
                Roll
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Roll no"
                name="roll"
                value={roll}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Qualification" className="form-label">
              Qualification
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Qualification"
                name="qualification"
                value={qualification}
                onChange={(e) => onInputChange(e)}
              />
              </div>

            <div className="mb-3">
              <label htmlFor="Course" className="form-label">
              Course
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Course"
                name="course"
                value={course}
                onChange={(e) => onInputChange(e)}
              />
              </div>
              <div className="mb-3">
              <label htmlFor="Year" className="form-label">
              year
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Course"
                name="year"
                value={year}
                onChange={(e) => onInputChange(e)}
              />
              </div>
              <div className="mb-3">
              <label htmlFor="Certificate" className="form-label">
              Certificate
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Certificate no"
                name="certificate"
                value={certificate}
                onChange={(e) => onInputChange(e)}
              />
              </div>
              <div className="mb-3">
              <label htmlFor="Hallticketno" className="form-label">
              Hallticketno
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter hallticketno"
                name="hallticketno"
                value={hallticketno}
                onChange={(e) => onInputChange(e)}
              />
              </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}