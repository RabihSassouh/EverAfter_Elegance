import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Login  from "./pages/Authentication/Login";
// import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* <Home /> */}
      <Login/>
    </Router>
  );
}

export default App;
