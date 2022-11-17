import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = {'token':true,'role':"admin"}
    return(
        auth.token && auth.role=="admin" ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes