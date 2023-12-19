import React from "react";
import SvarSide from "./components/svarside";

import "./index.css";

function App() {
  return (
    <main className="App">
      <div className="content">
        <h1 className="hovedoverskrift">
          <div>TAKKNEMLEG</div>
          <div>.no</div>
        </h1>
        <SvarSide />
      </div>
    </main>
  );
}

export default App;
