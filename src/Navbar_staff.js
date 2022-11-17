import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavLink,NavItem} from 'react-bootstrap';
import {NavDropdown,Button,Form,FormControl} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom';

const Navbar_staff = () => {
    const logindata = localStorage.getItem("loginstaff")
    const navigate = useNavigate()

    const Logout = ()=>{
        if (logindata){
            
            localStorage.clear();
            navigate("/login")
        }
    }
  return (
    <div style={{margin:"30px"}}> 
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <a onClick={() => { Logout() }} className="btn btn-success">Logout</a>
            </Nav>
          </Container>
        </Navbar>
    </div>
  )
}

export default Navbar_staff