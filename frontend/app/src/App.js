import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { FeeRoute } from "./admin/modules/fee/route";
import {AdminAuthorizeRoute} from "./admin/modules/authorize/route";
import { UserRoute } from './admin/modules/user/route';
import { FamilyRoute } from './admin/modules/family/route';
function App() {
  return (
    <Routes>
    <Route path="admin/*" element={
      <>
        <AdminAuthorizeRoute />
        <FeeRoute />
        <FamilyRoute/>
        <UserRoute />
      </>
    } />
  </Routes>
  );
}

export default App;
