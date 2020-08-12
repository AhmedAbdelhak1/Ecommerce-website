import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Header from'./Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue} from './StateProvider';
import {auth} from "./firebase";

import Footer from'./Footer';




function App() {
  const [{user},dispatch]= useStateValue();
  useEffect(()=>{
    const unsebscribe = auth.onAuthStateChanged((authUser =>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user: authUser
        })

      }else{
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    }))
    return ()=>{
      unsebscribe();
    }
  }, []);
  console.log("user login------------------", user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
          <Header/>
          <Home/>
          <Footer/>
         
         
            
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;

