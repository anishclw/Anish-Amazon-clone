import logo from './logo.svg';
import React,{useEffect} from "react"
import './App.css';
import Header from "./Header"
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from "./Checkout"
import Login from "./Login"
import { auth } from './firebase';

import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
const promise = loadStripe("pk_test_51ImvPfSACW6CdOTHJK9Ps8z70ENfeoJNTE3fDS91D2LB6CwsbKUcoJQdAjskWWCF4tV0hpVmh5LzIiAJLZ322MBZ005SuVdsoY");



function App() {
  const [{}, dispatch] =useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged( authUser => {
      
      if(authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  
   
  }, [])
  return (
    <Router >
    <div className="App">
   
    <Switch>
    <Route path ="/login">
       
      <Login />
           
     </Route>
     <Route path ="/payment">
       <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
   
          
    </Route>
    <Route path ="/checkout">
       <Header />
       <Checkout />
          
    </Route>
    <Route path ="/">
       <Header />
       <Home />
          
    </Route>
    

    </Switch>
     
    
    </div>
    </Router>
  );
}

export default App;
