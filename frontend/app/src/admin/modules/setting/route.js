import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminSetting from './jsx/adminsetting';
import AdminChangePassword from './jsx/adminchangepassword';
const AdminSettingRoute = () =>{
    return (
        <Routes>
            <Route path="/setting/manager-infor" element={<AdminSetting/>} />
            <Route path='/setting/change-password' element={<AdminChangePassword/>}/>
        </Routes>
    );
}

export {AdminSettingRoute};