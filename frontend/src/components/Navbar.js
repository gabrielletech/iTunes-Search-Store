import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Library from './Library';
import Favorites from './Favorites';
//import axios from 'axios';

const NavBar = () => {
    return (
        <div>
        <Router>
            <Container>
                <Navbar className="nav" expand="lg" variant="light" bg="light" >
                    <Navbar.Brand className="home"><Link to="/">Home</Link></Navbar.Brand>
                    <Navbar.Brand className="library"><Link to="/Library">Library</Link></Navbar.Brand>
                    <Navbar.Brand className="favorites"><Link to="/Favorites">Favorites</Link></Navbar.Brand>
                </Navbar>
            </Container>

        <Switch>
            <Route exact={true} path="/" />
            <Route path="/Library" render={() => <Library />} />
            <Route path="/Favorites" render={() => <Favorites />} />
        </Switch>
        </Router>
    </div>
    );
}

export default NavBar;
