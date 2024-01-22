import React from "react";
import Arrow from "./Arrow";

const SvarListe = ({ svarListe }) => {
  // Hent de siste 15 svarene
  const sisteSvar = svarListe.slice(-15);
  const omvendtSvarListe = [...sisteSvar].reverse();

  const handleSvarClick = (valgtSvar) => {
    // Viser en alert med informasjon om svaret
    alert(`Du klikket på: ${valgtSvar.overskrift} - ${valgtSvar.svar_innhold}`);
  };

  // Returnerer JSX for å vise listen over de siste svarene
  return (
    <section className="svarliste">
      <h1>Dine takknemligheter:</h1>

      {/* Bruker map for å liste ut hvert av de siste svarene */}
      {omvendtSvarListe.map((enkelSvar) => (
        <div key={enkelSvar.svar_id}>
          <div
            onClick={() => handleSvarClick(enkelSvar)}
            className="klikkbart-svar"
          >
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
