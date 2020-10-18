import React from 'react'
import { Link } from 'react-router-dom';
import App from '../App';
import '../compo/homepage.css'
import Buttons from './buttons';
import Customers from './customers';

//<a href="#" class="btn btn-primary" >View Customers</a>
class Homepage extends React.Component{
render(){
  return <div>
    
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



    
    <div className="cont">
        <div className="table-responsive">
          <table className="table table-borderless">
            <thead class="thead-dark">
              <tr></tr>
                <tr className="fsize">
                    {/* <th className="th-wl"> </th> */}
                    <th className="th-lg" >BANK MANAGEMENT SYSTEM</th>
                   
                  {/* <th className="wid" ></th> */}
                </tr>
            </thead>
            <tbody>
              <tr> <span className="colo">_____</span></tr>
              <tr>
                <p><span className="colo">_____</span>This is the #task2 of Web development and Design at THE SPARKS FOUNDATION.</p>
              </tr>
              <tr>
              <p><span className="colo">_____</span> <span className="tag">&#10146; YOUR MONEY, OUR SAFETY!!!
              </span></p>
              </tr>
              <tr>
              <p><span className="colo">_____</span><span className="tag"> &#10146; INSTANT AND ASSURED TRANSFERS.
              </span></p>
              </tr>
              
                  <tr>
                  
                    <td><Link to="/customers">
                      
                     <button className="btn btn-primary">View Customers</button></Link>
                    </td>
                    
                    </tr>
                  
                </tbody>
           </table>
        </div>
    </div>
<div class="footer">
    <div class="footer-copyright text-center py-3">Designed by : Dipti Babel
  </div></div>
     </div>
}
};
    
export default Homepage;