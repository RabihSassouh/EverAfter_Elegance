import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/Authentication/SignUp";
import Login from "./pages/Authentication/Login";
// import Home from "./pages/Home";
import Venue from "./pages/Vendors";
import SingleVenue from "./pages/SingleVendor";
// import AiTest from "./pages/AiTest";
// import Car1 from "./pages/Test";
import React, {useState} from "react";
import Dress1 from "./components/Dress3d";


export interface VenueData {
   name: string;
    guests: string;
    location: string;
    rating: number;
    reviewCount: number;
    imageUrl: string;
    slug: string;
  
}
export interface ContextType {
  venuesData: VenueData[];
  setVenuesData: React.Dispatch<React.SetStateAction<VenueData[]>>;
}

export const Context = React.createContext<ContextType>({
  venuesData: [],
  setVenuesData: () => {},
});

function App() {
  const [venuesData, setVenuesData] = useState<VenueData[]>([]);

  return (
    <Context.Provider value={{venuesData, setVenuesData}}>
      <Router>
        <Routes>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<SignUp />} path="/sign-up"></Route>
          <Route element={<Dress1 />} path="/"></Route>
          <Route element={<Venue />} path="/venue"></Route>
          <Route element={<SingleVenue />} path="/venue/:slug"></Route>
        </Routes>
      </Router>
      </Context.Provider>
  );
}

export default App;
