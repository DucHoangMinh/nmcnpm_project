import { Login } from './admin/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<Login />}>
          {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
