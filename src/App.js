import { useEffect } from "react";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import { applyTheme } from "./themes/utils";
import baseTheme from "./themes/base";
import darkTheme from "./themes/dark";
import Switch from "@mui/material/Switch";
import Darkmode from "./themes/Darkmode";
import { useState } from "react";

import "../src/themes/App.css";

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleChange = (evt) => {
    applyTheme(evt.target.checked ? darkTheme : baseTheme);
  };

  return (
    <>
      {/* <Darkmode></Darkmode> */}
      <Switch onChange={handleChange} className="pull-right" />
      {/* <Darkmode></Darkmode> */}
      <CustomCursor />
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <h1>My React App</h1>
        <Darkmode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
