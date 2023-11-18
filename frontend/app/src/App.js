import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { Fragment } from 'react';
import { FeeRoute } from "./admin/modules/fee/route";
import {AdminAuhorizeRoute} from "./admin/modules/authorize/route";
function App() {
  return (
    <Routes>
      <Route path="admin/*" element = {
        <Fragment>
          <AdminAuhorizeRoute/>
            <FeeRoute/>
            </Fragment>
          }/>
    </Routes>
  );
}

export default App;
