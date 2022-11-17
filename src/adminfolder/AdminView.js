import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

//all component
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import AdminNav from './AdminNav';

const AdminView = () => {
    
    const [data, setData] = useState([])

    const navigate = useNavigate() 
    const logindata = localStorage.getItem("loginadmin")

    useEffect(() => {
        getAlltask()
      }, [])
      
      const getAlltask = async () => {
        axios.get("https://bojlumia066.pythonanywhere.com/api/").then((res) => setData(res.data))
    }
    const Loginarea=()=>{
        navigate("/login")
    }
    // delete task
    const Deletetask = (id) => {
        if (window.confirm('Do you want to Delete the Task?')) {
            fetch("https://bojlumia066.pythonanywhere.com/api/" + id, {
                method: "DELETE"
            }).then((res) => {
                window.location.reload();
    
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
  
if(logindata){

    return (
    <div style={{margin:"30px"}}>
        <AdminNav/>
            <br></br><br></br>
    <Table striped bordered hover>
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Room Type</th>
              <th>Status</th>
              <th>Update</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {data.map((value) => (

                <tr>
                <td>{value.roomnumber}</td>
                <td>{value.roomtype}</td>
                <td>{value.status}</td>
                <td>{value.authorize}</td>
                <td>{value.date}</td>
                <td><a onClick={() => { Deletetask(value.id) }} 
                className="btn btn-success">Delete</a></td>
                </tr>
          ))}

          </tbody>
        </Table>
        </div>
      )
}else{
    return(
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

export default AdminView