import Switch from '@mui/material/Switch';
import {useEffect} from "react";

import BottomUpScroller from "./components/BottomUp";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import baseTheme from "./themes/base";
import darkTheme from "./themes/dark";
import {applyTheme} from "./themes/utils";

function App() {
  useEffect(() => { applyTheme(baseTheme); }, []);

  const handleChange = (evt) => {
    applyTheme(evt.target.checked ? darkTheme : baseTheme);
  }

  return (
    <>
      <Switch onChange={handleChange} className="pull-right" />
      <CustomCursor />
      <Hero />
      <Projects /> 
      <TechStack />
      <Contact />
      <BottomUpScroller/>
    </>
  );
}

export default App;
