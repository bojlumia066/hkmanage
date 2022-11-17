import React from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

//all component
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const AdminNav = () => {
    
    const logindata = localStorage.getItem("loginadmin")
    const navigate = useNavigate()

    const Logout = ()=>{
        if (logindata){
            
            localStorage.clear();
            navigate("/login")
        }
    }
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/admin"}>Create Task</Nav.Link>
            <Nav.Link as={Link} to={"/adminview"}>View all Task</Nav.Link>
            <a onClick={() => { Logout() }} className="btn btn-success">Logout</a>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default AdminNav
