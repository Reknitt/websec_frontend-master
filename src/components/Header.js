import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">WebSecProbe</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/learn">Learn</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    <Nav.Link as={Link} to="/createVuln">Create</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default Header;