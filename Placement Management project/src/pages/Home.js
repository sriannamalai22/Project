import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();


  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/students");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/students/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>

              <th scope="col">Name</th>
              <th scope="col">College</th>
              <th scope="col">Rollno</th>
              <th scope="col">Qualification</th>
              <th scope="col">Course</th>
              <th scope="col">Year</th>
              <th scope="col">Certificate</th>
              <th scope="col">Hallticketno</th>
              



              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>

                <td>{user.name}</td>
                <td>{user.college}</td>
                <td>{user.rollno}</td>
                <td>{user.qualification}</td>
                <td>{user.course}</td>
                <td>{user.year}</td>
                <td>{user.certificate}</td>
                <td>{user.hallticketno}</td>

              
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={"/"}><button className="btn btn-info">Back To Home</button></Link>
      </div>
    </div>
  );
}
