
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";


import Home from './Home'


function App (){
    return(
        <BrowserRouter>
             <Home />
        </BrowserRouter>
    )
}

export default App;

