import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { FeeRoute } from "./admin/modules/fee/route";
import {AdminAuthorizeRoute} from "./admin/modules/authorize/route";
import { UserRoute } from './admin/modules/user/route';
import { FamilyRoute } from './admin/modules/family/route';
import { AdminSettingRoute } from './admin/modules/setting/route';
import SideBar from './admin/patials/sidebar';
import { PopulationRoute } from './admin/modules/population/route';
import UserSideBar  from '../src/user/userSideBar'
import { UserRoutes } from './user/route';
function App() {
  return (
    <Routes>
    <Route path="admin/*" element={
      <>
        <SideBar/>
        <AdminAuthorizeRoute />
        <FeeRoute />
        <FamilyRoute/>
        <UserRoute />
        <AdminSettingRoute/>
        <PopulationRoute/>
      </>
    } />
    <Route path='user/*' element={
      <>
        <UserSideBar/>
        <UserRoutes/>
      </>
    }/>
  </Routes>
  );
}

export default App;
