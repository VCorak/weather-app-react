import React from "react";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Search defaultCity="Antwerp" />
      </div>
      <footer>
        <small>
          <a
            href="https://github.com/VCorak/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          , by Valentina Corak
        </small>
      </footer>
    </div>
  );
}

export default App;
