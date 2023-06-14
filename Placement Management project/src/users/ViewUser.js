import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
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


  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/students/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Student Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Student id : {user.id }
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>College:</b>
                  {user.college}
                </li>
                <li className="list-group-item">
                  <b>Roll:</b>
                  {user.roll}
                </li>
                <li className="list-group-item">
                  <b>Qualification:</b>
                  {user.qualification}
                </li>
                <li className="list-group-item">
                  <b>Course:</b>
                  {user.course}
                </li>
                <li className="list-group-item">
                  <b>Year:</b>
                  {user.year}
                </li>
                <li className="list-group-item">
                  <b>Certificate:</b>
                  {user.certificate}
                </li>
                <li className="list-group-item">
                  <b>Hallticketno:</b>
                  {user.hallticketno}
                </li>
               
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
