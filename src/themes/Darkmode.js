import React from "react";
import "./App.css"; // Import your Darkmode CSS file

function Darkmode({ toggleDarkMode, darkMode }) {
  return (
    <div>
      <div className="button-container">
        <button className="dark-mode-button" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Darkmode;
