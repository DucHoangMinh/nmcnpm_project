import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AdminAuhorizeRoute} from './admin/modules/authorize/route';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminAuhorizeRoute/>} />
      </Routes>
    </Router>
  );
}

export default App;
