import React, { createContext, useReducer } from 'react'
import Navbar from './component/Navbar';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Route ,Switch } from 'react-router-dom';
import Home  from './component/Home';
import About from './component/About';
import Login from './component/Login';
import Contact from './component/Contact';
import Signup from './component/Signup';
import Errorpage from './component/Errorpage';
import Logout from './component/Logout';
import { reducer,initialState } from './Reducer/Usereducer';

export const UserContext = createContext();


export const Routing = () => {
  return (
     <>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/About">
        <About/>
      </Route>
      <Route path="/Login">
        <Login/>
      </Route>
      <Route path="/Contact">
        <Contact/>
      </Route>
      <Route path="/Signup">
        <Signup/>
        </Route>
        <Route path="/Logout">
        <Logout/>
        </Route>
       <Route >
        <Errorpage/>
        </Route>
        </Switch>

     </>
  )
}



const App = () => {
 const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <Routing />
      </UserContext.Provider>
    </>
  )
}

export default App;

