import React from "react";

function SvarDetaljer({ svar }) {
  // Hvis det ikke er noe valgt svar, viser vi ingenting
  if (!svar) return null;

  return (
    <div className="svar-detaljer">
      <p>{svar.svar_innhold}</p>
    </div>
  );
}

export default SvarDetaljer;
