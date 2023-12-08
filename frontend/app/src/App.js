import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { Fragment } from 'react';
import { FeeRoute } from "./admin/modules/fee/route";
import {AdminAuthorizeRoute} from "./admin/modules/authorize/route";
import { UserRoute } from './admin/modules/user/route';
function App() {
  return (
    <Routes>
    <Route path="admin/*" element={
      <>
        <AdminAuthorizeRoute />
        <FeeRoute />
        <UserRoute />
      </>
    } />
  </Routes>
  );
}

export default App;
