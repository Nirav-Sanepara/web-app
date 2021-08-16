import React from 'react'
import "D:/rtut/n1app/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "D:/rtut/n1app/node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Service from './Service';
import Home from './Home';
const App = () => {
    return (
        <>

            <NavBar />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Service" component={Service} />
                <Redirect to="/" />


            </Switch>
        </>
    );
}

export default App;