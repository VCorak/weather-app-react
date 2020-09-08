import React from "react";

import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Search />
        <footer>
          <small>
            <a
              href="https://github.com/VCorak/weather-app-react"
              target="_blank"
            >
              Open-source code
            </a>
            , by Valentina Corak
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
