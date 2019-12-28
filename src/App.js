import React from 'react';
//import logo from './logo.svg';
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layout/Header";
import"bootstrap/dist/css/bootstrap.min.css";
import { Provider } from './Context';
import AddContact from "./components/Contacts/AddContact";
import EditContact from "./components/Contacts/EditContact";
import{HashRouter as Router,Route,Switch}from 'react-router-dom';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import Test from './components/test/Test';
class App extends React.Component {
  render(){
   return(
     <Provider>
       <Router>
     <div className="App">
       <Header branding="Contact Manger"/>
       <div className="Container">
       <Switch>
         <Route exact path="/"component={Contacts}/>
         <Route exact path="/Contact/add" component={AddContact}/>
         <Route exact path="/Contact/edit/:id"component={EditContact}/>
         <Route exact path="/about/:id"component={About}/>
         <Route exact path="/test"component={Test}/>
         <Route component={NotFound}/>
         </Switch>   
     </div>
     </div>
     </Router>
     </Provider>
   );
}
}
export default App;