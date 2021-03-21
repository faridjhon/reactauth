import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import TricketInfo from './Components/Trickets/TricketInfo';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
  
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
    <Router>
      <Header/>
      <Switch>
         <Route path="/Home">
          <Home />
        </Route> 
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/Tricket/:id">
                <TricketInfo/>
             </PrivateRoute>  
              

      </Switch>      
    </Router>
    </UserContext.Provider>
  );
}

export default App;