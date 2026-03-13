import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <nav className="navbar" aria-label="Primary navigation">
        <div className="navbar-inner">
          {/* Title only (no links), centered. Mark is decorative. */}
          <div className="navbar-titleWrap" aria-label="Tic Tac Toe">
            <span className="navbar-mark" aria-hidden="true" />
            <span className="navbar-title">Tic Tac Toe</span>
          </div>
        </div>
      </nav>

      {/* Main content remains centered and gameplay-safe */}
      <main className="app-main">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Current theme: <strong>{theme}</strong>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </main>
    </div>
  );
}

export default App;
