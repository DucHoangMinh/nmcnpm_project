import { Login } from './admin/modules/authorize/Login';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={Login} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound}/>
      </div>
    </Router>
  );
}

export default App;
