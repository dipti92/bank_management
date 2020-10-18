import React from 'react'
import { Link } from 'react-router-dom';
import './details.css'


class Details extends React.Component{

  constructor(props){
    super(props);
    this.state={
      gotacc:props.location.accnum,
      gotname:props.location.name,
      gotemail:props.location.email,
      gcontact:props.location.contact,
      gotaddress:props.location.add,
      gotbalance:props.location.bal,
      gotid:props.location.id
     }
  };

render(){
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
          <table class="table table-borderless">
            <thead class="thead-dark">
                <tr>
                    <th class="th-lg">CUSTOMER DETAILS </th>
                    <th className="wl" ></th>
                    <th className="wid" ></th>
                </tr>
            </thead>
            <tbody>             
                 <tr>
                   <td> Account Number :- <span className="bb"> {this.state.gotacc}</span> </td>
                   </tr>
                  <tr>
                    <td>Name :-  <span className="bb">{this.state.gotname}</span> </td>
                  </tr>
                  <tr>
                    <td>Customer ID:-  <span className="bb">{this.state.gotid}</span> </td>
                  </tr>
                  <tr>
                    <td>Email Id :- <span className="bb"> {this.state.gotemail}</span></td>
                 </tr>
                  <tr>
                   <td> Contact  :- <span className="bb"> {this.state.gcontact}</span> </td>
                  </tr>
                  <tr>
                   <td>Address :- <span className="bb"> {this.state.gotaddress}</span></td>
                  </tr>
                  <tr>
                   <td>Current Balance :- <span className="bb"> {this.state.gotbalance}/-</span> </td>
                  </tr>
                  <tr>
                    <td></td>
                   <td><Link to="/customers">
                     <button type="button" class="btn btn-info">Back to Customer List</button>
                     </Link></td>
                   <td><Link to= {{ pathname:"/transfer", 
                     id: this.state.gotid,frombal:this.state.gotbalance}}>
                     <button type="button" class="btn btn-warning">Transfer Money</button>
                     </Link>
                     </td>
                  </tr>
                </tbody>
          </table>
        </div>
    </div>
    </div>
      ) 
        
          };
        };
export default Details;