import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { Fragment } from 'react';
import { FeeRoute } from "./admin/modules/fee/route";
import {AdminAuhorizeRoute} from "./admin/modules/authorize/route";
function App() {
  const {subpath} = useParams();
  console.log(subpath)
  return (
    <Router>
      <Routes>
          <Route path="admin/*" element = {
            <Fragment>
              <AdminAuhorizeRoute/>
              <FeeRoute/>
            </Fragment>
          }/>
        </Routes>
    </Router>
  );
}

export default App;
