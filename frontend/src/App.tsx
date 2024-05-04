import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import SignUp from "./pages/Authentication/SignUp";
// import Login  from "./pages/Authentication/Login";
// import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* <Home /> */}
      {/* <Login/> */}
      <SignUp/>
    </Router>
  );
}

export default App;
