import React,{Component} from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {
  renderHome = () => <HomeContainer/>
  renderCustomerContainer = () => <h1>Customer Container </h1>
  renderHomeCustomerListContainer = () => <h1>CustomerListContainer </h1>
  renderCustomerNewContainer  = () => <h1>CustomerNewContainer</h1>

  render() {
    return(
    <Router>
    <div className="App">
      <Route exact path = "/" component ={HomeContainer}/>
      <Route exact path = "/customers" component ={CustomersContainer}/>
      <Switch>    
      <Route  path = "/customers/new" component ={NewCustomerContainer}/>
      <Route  path = "/customers/:dni" render ={props=><CustomerContainer {...props} dni ={props.match.params.dni}/>}/>
      </Switch>
    </div>
    </Router>
  );
}
}

export default App;
