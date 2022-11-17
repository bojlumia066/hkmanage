import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

//components
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'
import Navbar_staff from './Navbar_staff'



const Home = () => {
    const [data, setData] = useState([])
    const logindata = localStorage.getItem("loginstaff")
    const navigate = useNavigate()

    const my = {
        padding: "10px",
        margin:"100px",
        fontFamily: "Sans-Serif"
      }
      const my2 = {
        color:"blue",
        font:"bold"
      }



  useEffect(() => {
    getAlltask()
    if(data){
        //console.log(data[0].roomnumber)
    }
  }, [])

  const getAlltask = async () => {
    axios.get("https://bojlumia066.pythonanywhere.com/api/").then((res) => setData(res.data))
}

  const Updatetask = (id) => {
    if (window.confirm('Do you want to upload to opera?')) {
        fetch("https://bojlumia066.pythonanywhere.com/api/update/" + id, {
            method: "POST"
        }).then((res) => {
            //alert('Update successfully')
            window.location.reload();

        }).catch((err) => {
            console.log(err.message)
        })
    }
}

const Loginarea=()=>{
    navigate("/login")
}

if(logindata){
    return (
        <Container fluid>
          <Navbar_staff/>
          <Row style={my}>
          {data.map((value) => (
          <div> 
              <Card style={{padding:'10px'}} key={value.id}>
              <Card.Body>
                <Card.Title><span>Room Number </span>{value.roomnumber} <span style={my2}>{value.roomtype}</span></Card.Title>
                <Card.Text>
                  <p>{value.status}</p>
                  <p>{value.authorize}</p>
                  <p>{value.date}</p>
                </Card.Text>
                <a onClick={() => { Updatetask(value.id) }} className="btn btn-success">Update</a>
              </Card.Body>
            </Card> 
            <br></br>
          </div>
        ))}
        <br></br>  
        </Row>
    </Container>)
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
export default Home
