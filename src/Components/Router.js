import React from "react";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Routes/Home";
import Contact from "../Routes/Contact";
import Portfolio from "../Routes/Portfolio";
import Detail from "../Routes/Portfolio/PortfolioDetail";


export default() => (
    <Router>
        <>
            <Header /> 
            <Switch>
                <Route path = "/home" exact component={Home}></Route>
                <Route path = "/contact" exact component={Contact}></Route>
                <Route path = "/portfolio" exact component={Portfolio}></Route>
                <Route path = "/portfolio/:id" component={Detail}></Route>           
                <Redirect from = "*" to ="/home" />
            </Switch>
        </>
    </Router>
);