import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import Home from './Home'
import Login from './Login'
import Admin_panel from './adminfolder/Admin_panel'
import AdminView from './adminfolder/AdminView'


const App = () => {
  return (
    <div className='App'>

<Router>
  <Routes>
    /*<Route element={<PrivateRoutes />}>
    <Route element={<Home/>} path="/" exact/>
    </Route>*/
    <Route element={<Home/>} path="/" exact/>
    <Route element={<Login/>} path="/login"/>
    <Route element={<Admin_panel/>} path="/admin"/>
    <Route element={<AdminView/>}path="/adminview"/>
  </Routes>
</Router>

 </div>
  )
}

export default App;
