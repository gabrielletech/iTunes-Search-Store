import React from 'react';
import logo from './images/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import './App.css';

const App = () => {
        return ( 
        <>
            <div style={headerStyle}>
                <img src={logo} alt="logo" className="logo" /><br></br>
            </div>
            <div style={headerStyle}>
                <NavBar /><br></br>
            </div>
        </>
        );
    }

    const headerStyle = {
        background: '#fff'
    }
export default App;