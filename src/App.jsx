import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import moment from "moment";
import MyButton from "./components/MyButton"
import { Button } from "@mui/material";
import About from "./pages/About";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
let currentDate  = moment("20241230", "YYYYMMDD").fromNow()
console.log(currentDate)
 let [isLit,setLit] = useState(true)

  function changeTheme() {
      setLit(!isLit)
      console.log(isLit)
  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
            

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
