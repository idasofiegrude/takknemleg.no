import React, { useState } from "react";

function SvarBox({ funksjonSomLagrer }) {
  const [svar, setSvar] = useState(""); //holder styr på brukerens svar
  const handleInputChange = (e) => {
    setSvar(e.target.value);
  };
  const handleSubmit = () => {
    funksjonSomLagrer(svar);
    setSvar("");
  };

  return (
    <div>
      <textarea
        className="SvarBox"
        value={svar}
        onChange={handleInputChange}
        placeholder="Skriv inn din takknemlighet her"
      />
      <div className="lagrecontainer">
        <button onClick={handleSubmit} className="lagreknapp">
          Lagre
        </button>
      </div>
    </div>
  );
}

export default SvarBox;
