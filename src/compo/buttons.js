import React from 'react'
import Axios from 'axios'
import Homepage from './homepage';
import Customers from './customers';
import Details from './details';


class Buttons extends React.Component{
  state={
    user:[],
  };

    

    componentDidMount () {
        Axios.get('http://localhost:3001/api/customers')
      .then((response)=>{
        this.setState({user:response.data})
      });
    };
  
    

  render() {
    
    return(

<div>
                    <ul>
                      {this.state.user.map(e => <li> {e.name}</li>)}
                    </ul>
</div>
 
    )};  //render and return
    }; //class

export default Buttons;