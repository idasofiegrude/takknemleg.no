import React from "react";
import SvarSide from "./components/svarside";
import "./index.css";

function App() {
  return (
    <main className="App">
      <div className="content">
        <h1 className="hovedoverskrift">TAKKNEMLEG.no</h1>
        <SvarSide />
        <div className="footer">
          Laget med ❤️ av <a href="https://idasofie.dev">Ida Sofie Grude</a>
        </div>
      </div>
    </main>
  );
}

export default App;
