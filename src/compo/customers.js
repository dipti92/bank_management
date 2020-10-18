import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import './custom.css'

function Customers() {
  const [clist,setclist]=useState([])
  useEffect(()=>{
     Axios.get('http://localhost:3001/api/customers')
        .then((response)=>{
          setclist(response.data);
        });
      },[]);

     return(
       
       <div>

<nav class="navbar navbar-expand navbar-dark bg-dark">
    
    <h1 className="brand">$Bank</h1>
  

    <div class="collapse navbar-collapse" id="navbarsExample02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>

      </ul>
      <form class="form-inline my-2 my-md-0">
        <input class="form-control" type="text" placeholder="Search"/>
      </form>
    </div>
  </nav>

  <div className="co">
                < table className="table table-bordered"> 
                  <thead className="thead-dark">
                     <tr>
                         <th scope="col">ID</th>
                         <th scope="col">Name</th>
                         <th scope="col">Account Number</th>
                         <th scope="col">Other Details</th>
                     </tr>
                  </thead>

                   <tbody>
                   {clist.map((c)=>{
                     return(
                     <tr>
                     <th scope="row">{c.id}</th>
                     <th>{c.name}</th>
                     <td>{c.accnum}</td>
                     <td><Link to= {{ pathname:'/customer/detail', 
                     id: c.id, name:c.name ,email:c.email,
                     contact:c.contact,add:c.address,
                     bal:c.current_balance , accnum:c.accnum}}>
                       <button
                          type="button" class="btn btn-outline-info"> 
                          View Details and Transfer Money</button></Link>
                    </td>
                    </tr>
               
                )})}
              
                <tr>
                < table className="table table-borderless"> 
                   <tr> <td className="wi">
                     <Link to="/"><button class="btn btn-primary">
                     Back to Home </button></Link>
                   </td></tr>
                  </table>
                 </tr>
             </tbody>
          </table>
        </div></div>
       
     )};
export default Customers;