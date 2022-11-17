import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';


const Login = () => {
    const[pass,setpass] = useState("")
    const[roll,setroll] = useState("")
    
    const navigate = useNavigate()

    // css styling object
    const centercss={
        margin: '100px',
    }
    const handleClick=()=>{

        let senddt={
            roll : roll,
            pwd : pass
        }
// api call
        const headers = {
            'Content-Type': 'application/json'
        };
        axios.post('https://bojlumia066.pythonanywhere.com/api/admin/',senddt)
            .then(res =>{ 
                console.log(res.data)
                if(res.data.msg==="1"){ 
                    navigate("/admin")
                    localStorage.setItem("loginadmin",(res.data.msg))
                }
                if(res.data.msg=="2"){
                    setpass("")
                    setroll("")
                    localStorage.setItem("loginstaff",(res.data.msg))
                    navigate("/");
                }
            })
            .catch(err => alert(err))

    }

  return (
    <div style={centercss}>
    <Stack gap={2} className="col-md-5 mx-auto">
        <Form.Label>Select Roll</Form.Label>
            <Form.Select onChange={e => setroll(e.target.value)}>
            <option value="">---</option>
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
            </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" 
                    onChange={e => setpass(e.target.value)}/>
            </Form.Group>
        <Form.Group className="mb-3">
        
      </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
                           Submit
        </Button>
    </Stack>

        </div>
  )
}

export default Login