import logo from './logo.svg';
//import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Vehicles from './components/Vehicles/Vehicles';
import SignIn from './components/SignIn/SignIn';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';
import SearchResult from './components/SearchResult/SearchResult';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext=createContext();

function App() {
const [loggedInUser,setLoggedInUser]=useState({
  name:'',
  email:'',
  isSignedIn:false,
  password:'',
  vehicle:''
});
  return (

    <UserContext.Provider value={[loggedInUser,setLoggedInUser]} className="App">
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
      <Vehicles></Vehicles>
      </Route>
      <Route path="/login">
      <SignIn></SignIn>
      </Route>
      <Route path="/signup">
      <SignUp></SignUp>
      </Route>
      <PrivateRoute path="/searchvehicle">
      <SearchResult></SearchResult>
      </PrivateRoute>
      <Route path="*">
      <NotFound></NotFound>
      </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
