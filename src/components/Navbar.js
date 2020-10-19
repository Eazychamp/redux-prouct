import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

const user = JSON.parse(localStorage.getItem("user"))
class Nav extends Component {


    logout = () => {
        localStorage.removeItem("user", JSON.stringify(user));
        <Redirect to="/login" />
    }
    render() {
        
        return (
            <Navbar>
                <Navbar.Brand href="#home">BOH</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <b>{user['name']}</b>{'  '}
                    <button  className="btn btn-primary" onClick={this.logout}>Logout</button>
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Nav;