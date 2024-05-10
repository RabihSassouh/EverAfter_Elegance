import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/Authentication/SignUp";
import Login from "./pages/Authentication/Login";
import Home from "./pages/Home";
import Venue from "./pages/Vendors";
import SingleVenue from "./pages/SingleVendor";
// import Car1 from "./pages/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<SignUp />} path="/sign-up"></Route>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<Venue />} path="/venue"></Route>
        <Route element={<SingleVenue />} path="/v"></Route>
      </Routes>
    </Router>
  );
}

export default App;

//Ai API secret key: "sk-proj-UW5T6Jl7Bzk96HpGnDnkT3BlbkFJC7o77NiwVqD46H8kZqkQ"