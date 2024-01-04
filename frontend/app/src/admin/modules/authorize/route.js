import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './jsx/Login';
import Home from './jsx/Home';
import Register from './jsx/Register';
import Logout from './jsx/Logout';
const AdminAuthorizeRoute = () =>{
    return (
        <Routes>
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
            <Route path="home" element ={<Home/>}/> 
            <Route path="logout" element={<Logout/>}/>
        </Routes>
    );
}

export {AdminAuthorizeRoute};