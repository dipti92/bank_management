import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link,Redirect} from "react-router-dom";
import Customers from'./compo/customers'
import Buttons from './compo/buttons'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Homepage from './compo/homepage';
import Details from './compo/details';
import Transfer from './compo/transfer';
import Transaction from './compo/transaction';
//<Customers/>   
/* 

*/

function App() {
 
  
  return (
    <div className="App">
   <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
         
          <Route  path="/customers" component={Customers}/>
          <Route  path="/customer/detail" component={Details}/>
          <Route exact path="/transfer" component={Transfer}/>
          <Route exact path="/transaction" component={Transaction}/>
        </Switch>

     </Router>
    </div>
  );
}

export default App;
