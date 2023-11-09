import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000')
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <div className="App">
      {/* Innholdet i appen din her */}
    </div>
  );
}

export default App;
