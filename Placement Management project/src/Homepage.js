import React from 'react'
import "./index.css";

import { Link } from 'react-router-dom'
import AddUser from './users/AddUser'
import Images from './Images/SM1.jpg'
export default function Homepage() {
  return (
    <div>
  <html>

  <div>
      <h1 className='text text-secondary p-3 mb-2 bg-gradient-warning text-dark'>Welcome to Our Placement Management</h1>
      <img className='float-left' src = {Images} style ={{
        height :'150px',
        WebkitBorderRadius:'150px',

      }}></img>
      </div>
      <div style={{
        fontFamily:'sans-serif',
        color :'black',
        fontSize:20 ,
      }}>
      <p>The manual work makes the process slow and other problems such as inconsistency and ambiguity on operation.</p><p>In order to avoid this web-based placement managed system is proposed.
</p>
      <button className='btn btn-secondary'>Start Placements</button>
      <h5 style={{
        fontFamily : 'sans-serif',
        fontSize :'22px'

      }}>
        <br></br>
      <p>In this project</p>
      <p> It intends to help fast in fast access procedures in placement related activities and ensures to maintain the details of the student. 
</p>
     <p>  The placement cell calls the companies to select their students for jobs via the campus interview.</p><p>The placement cell allows the companies to view the student resumes in selective manner.</p><p>
 They can filter the students’ profile as per their requirement.</p><p>The job details of the placed students will be provided by the administrator.
</p>
    </h5>
    </div>

    
  </html>
          
        
    </div>
  );
}
