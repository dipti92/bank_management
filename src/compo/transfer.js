import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './trasfer.css'

function Transfer(props){
    const [dlist,setdlist]=useState([]);
    const fromid=props.location.id;
    const frombal=props.location.frombal;
   
 
    
    useEffect(()=>{
        Axios.get('http://localhost:3001/api/customers')
           .then((response)=>{
             setdlist(response.data.slice(0,fromid-1).concat(response.data.slice(fromid,response.data.length)));
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
          
                    <div class="cont">
       <div class="table-responsive">
           <div class="table table-sm" >
               <div class="table table-hover">
          <table class="table table-borderless">
            <thead class="thead-dark">
                <tr>
                    <th className="w"> TRANSFER MONEY TO </th>
                    <th className="w" >Account Number </th>
                    <th className="w" ></th>
                </tr>
            </thead>
          
            <tbody>  
            
            
            {dlist.map((d)=>{
                 return(   
                             
                 <tr>
                   
                   <td> {d.name} </td>
                   <td>{d.accnum}</td>
                   <td>
                      <Link to={{ pathname:'/transaction', 
                     toid: d.id,toname:d.name,toaccnum:d.accnum,tobal:d.current_balance,
                     fromid:fromid,frombal:frombal}}> 
                       <div class="btn-group btn-group-sm">
                     <button type="button" class="btn btn-warning">Transfer Money </button></div>
                      </Link> 
                     </td>
                   </tr>
                 
                  )})}
                 
                  <tr>
                    <td> <Link to="/customers"> <button type="button" class="btn btn-primary">
                      Back To Customer List</button></Link>
                    </td>
                  </tr>
               
                </tbody>
                    
          </table>
        </div>
        </div>
    </div>
    </div>
                           
                       
                          
                          </div>
)

};

export default Transfer;