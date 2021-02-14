
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Link,Switch } from "react-router-dom";
import Signup from './Signup'
import Login from './Login'



import Home from './Home'


function App (){
    return(
        <BrowserRouter>
             <Route path='/' exact>
                <Home  />
             </Route>
             <Switch>
                <Route path='/login' >
                    <Login />
                </Route>
                <Route path='/signup' >
                    <Signup />
                </Route>
             </Switch>
        </BrowserRouter>
    )
}

export default App;

