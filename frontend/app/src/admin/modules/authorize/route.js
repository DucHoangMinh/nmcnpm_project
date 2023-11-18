import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './jsx/Login';
import Home from './jsx/Home';
const AdminAuhorizeRoute = () =>{
    return (
        <Routes>
            <Route path="login" element={<Login/>} />
            <Route path="home" element ={<Home/>}/> 
        </Routes>
    );
}

export {AdminAuhorizeRoute};