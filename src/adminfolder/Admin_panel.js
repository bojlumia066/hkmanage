import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
//all components
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import AdminNav from './AdminNav';


const Admin_panel = () => {

  const navigate = useNavigate() 

  const[roomnumber,setroomnumber] = useState("")
  const[roomtype,setroomtype] = useState("")
  const[status,setstatus] = useState("")
  const[authorize,setauthorize] = useState("")

  const logindata = localStorage.getItem("loginadmin")


const handleClick=()=>{

  let Senddata = {
    roomnumber : roomnumber,
    roomtype : roomtype,
    status:status,
    authorize:authorize
}
const headers = {
  'Content-Type': 'application/json'
}
axios.post('https://bojlumia066.pythonanywhere.com/api/adminpost/', Senddata, { headers })
  .then(res =>{ 
      if(res.data){ 
         setroomnumber("")
         setroomtype("")
         setstatus("")
         setauthorize("")
         navigate("/adminview")
      }
  })
  .catch(err => alert(err))

}
const Loginarea=()=>{
  navigate("/login")
}

if(logindata){

  return (
    <div style={{margin:"20px"}}>
      <AdminNav/>
        <br></br><br></br>
        <Stack gap={3} className="bg-light border" style={{padding:"20px"}}>
            <Form.Group className="mb-3">
                <Form.Label>Room Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Room Number"
                onChange={e => setroomnumber(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Room Type</Form.Label>
                <Form.Control type="text" placeholder="Enter Room Type" 
                onChange={e => setroomtype(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" placeholder="Enter Status" 
                onChange={e => setstatus(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Update</Form.Label>
                  <Form.Select onChange={e =>setauthorize(e.target.value)}>
                    <option value="">---</option>
                    <option value="awaiting">Awaiting</option>
                 </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClick}>
                           Submit
            </Button>
        </Stack>
    </div>
  )

}else{
  return (
    <Container>
    <br></br><br></br>
    <Alert>
        <h1>Please Login</h1>
        <Button variant="primary"onClick={Loginarea}>Login</Button>
    </Alert>
  </Container>
  )
}
  
}

export default Admin_panel