import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

function App() {

 let [isLit,setLit] = useState(true)

  function changeTheme() {
      setLit(!isLit)
      console.log(isLit)
  }

  return (
    <div className={isLit?"light":"dark"}>
      <label>
        <input onClick={changeTheme} className="hidden" type="checkbox" />
        {isLit?<GoSun />:<FaMoon />}
      </label>
    </div>
  );
}

export default App;
