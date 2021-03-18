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
import { createContext, useState } from 'react';

export const UserContext=createContext();

function App() {
const [user,setUser]=useState({});
  return (
    <UserContext.Provider value={[user,setUser]} className="App">
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
      <Route path="*">
      <NotFound></NotFound>
      </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
