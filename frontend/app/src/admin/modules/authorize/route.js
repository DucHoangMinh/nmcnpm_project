import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './jsx/Login';
import Home from './jsx/Home';
const AdminAuhorizeRoute = () =>{
    return (
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />   
        </Routes>
    );
}

export {AdminAuhorizeRoute};