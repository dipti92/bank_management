import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './transaction.css'


class Transaction extends React.Component{
    
  constructor(props){
    super(props);
    this.state=({
      toid:props.location.toid,
      toname:props.location.toname,
      tonum:props.location.toaccnum,
      tobal:props.location.tobal,
      fromid:props.location.fromid,
      frombal:props.location.frombal,
      userinput:0,
      remainingbal:0
    })
  }
  
  
  handleamount=(e)=> {
  

    this.setState({
      userinput:e.target.value
      
    })
   }
 
 handleclick=(e)=> {
  e.preventDefault();
    
    if(this.state.userinput>5000){
      window.alert(`Amount Exceeded ! You can transfer amount upto RS.5000/- only`)
    }

    else if(this.state.userinput>this.state.frombal){
      window.alert('You don have sufficient Amount in our Account ! Please check and Try Again.')
    }

    else{
      Axios.put("http://localhost:3001/api/transact",{
        frombal:this.state.frombal,
        fromid:this.state.fromid,
        inputval:this.state.userinput,
        toid:this.state.toid,
        tobal:this.state.tobal
      })   .then(res=>{
      alert("Transaction Successful ! Thank You !")
      })
    }
     
     
   // console.log(this.state.remainingbal);
 } 
  
  
  
  
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
     <div>
     


     <div class="cont">
       <div class="table-responsive">
          <table class="table table-borderless">
            <thead class="thead-dark">
                <tr>
                    <th class="wl">TRANSFER AMOUNT </th>
                    <th className="wl" ></th>
                   
                </tr>
            </thead>
            <tbody>   
            <tr>
                   <td> 
                        <label>Transfer Money to :</label>
                        <input type="text" class="form-control" 
                        placeholder={this.state.toname} disabled/></td>

                        <td><label>Account Number :</label>
                        <input type="text" class="form-control" 
                        placeholder={this.state.tonum} disabled/></td>
                   </tr>

                 <tr>
                   <td> <span class="input-group-addon">Enter Amount to be transferred :</span>
                        <input type="number" class="form-control" 
                          min="1" max="1000" onChange={this.handleamount}
                         placeholder="Should be less than 5000 Rs"/></td>
                   </tr>
                 
                  <tr>
                  
                 
                   <td>
                     
                     <button type="button" class="btn btn-success"
                     onClick={this.handleclick}
                     >Transfer Money</button>

                     <Link to="/customers">
                     <button type="button" class="btn btn-danger">Cancel This Transaction</button>
                     </Link>
                   

                    <Link to="/">
                     <button type="button" class="btn btn-primary">Back To Homepage</button>
                     </Link>
                     </td>
  
                  </tr>

              
                </tbody>
          </table>
        </div>
    </div>
      ) 
     </div>
        </div>
    )
};
};

export default Transaction;