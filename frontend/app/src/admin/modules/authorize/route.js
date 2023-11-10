import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './jsx/Login';
const AdminAuhorizeRoute = () =>{
    return (
        <Routes>
            <Route path="login" element={<Login />} />
        </Routes>
    );
}

export {AdminAuhorizeRoute};