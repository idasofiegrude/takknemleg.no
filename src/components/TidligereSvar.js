import React from "react";
import Arrow from "./Arrow";

const SvarListe = ({ svarListe }) => {
  // Denne funksjonen kalles når et svar blir klikket på
  const handleSvarClick = (valgtSvar) => {
    // Viser en alert med informasjon om svaret
    alert(`Du klikket på: ${valgtSvar.overskrift} - ${valgtSvar.innhold}`);
  };

  // Returnerer JSX for å vise listen over svar
  return (
    <section className="svarliste">
      <h1>Dine takknemligheter:</h1>

      {/* Bruker map for å liste ut hvert svar */}
      {svarListe.map((enkelSvar) => (
        <div>
          <div
            key={enkelSvar.id} // Bruker id som nøkkel for hvert element
            onClick={() => handleSvarClick(enkelSvar)} // Setter opp klikk-håndtering
            className="klikkbart-svar" // CSS-klasse for styling
          >
            {/* Viser overskrift og innhold for hvert svar */}
            <span
              className="tidligere-svar-rad"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {enkelSvar.overskrift}
              <Arrow />
            </span>

            <br />
          </div>
        </div>
      ))}
    </section>
  );
};

export default SvarListe;
