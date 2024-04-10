import React, { useState } from "react";

function SvarBox({ vedLagring }) {
  const [svar, setSvar] = useState(""); //holder styr på brukerens svar

  const handleInputChange = (e) => {
    setSvar(e.target.value);
  };

  const handleSubmit = () => {
    // Sjekker om 'svar' er tom eller kun inneholder mellomrom (da kan man fortsatt lagre selv om man begynner eller slutter svaret med mellomrom)
    if (svar.trim() === "") {
      alert("Vennligst skriv inn et svar før du lagrer.");
      return; // Avslutter funksjonen for å forhindre å lagre et tomt svar
    }
    // Hvis det er et gyldig svar, kaller handleSubmit vedSvar med det nåværende svaret som argument.
    vedLagring(svar);
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
