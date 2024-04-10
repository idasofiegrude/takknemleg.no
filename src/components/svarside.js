import React, { useState, useEffect } from "react";
import SvarBox from "./SvarBox";
import SpørsmålsComponent from "./SpørsmålComponent";
import TidligereSvar from "./TidligereSvar";
import API from "../api";

import "../index.css";

function SvarSide() {
  const [tidligereSvar, setTidligereSvar] = useState([]);

  const hentTidligereSvar = async () => {
    try {
      const response = await API.get("/svar");
      setTidligereSvar(response.data);
    } catch (error) {
      console.error("Feil ved henting av tidligere svar:", error);
    }
  };

  useEffect(() => {
    hentTidligereSvar();
  }, []); // Denne effekten kjøres kun én gang når komponenten monteres

  const Lagrefunksjon = function (svaret) {
    let svarOverskrift =
      svaret.length > 20 ? svaret.slice(0, 30) + "..." : svaret;

    let svarObject = {
      navn: "Ida",
      overskrift: svarOverskrift,
      svar_innhold: svaret,
    };

    // Send POST-forespørsel til Flask API
    API.post("/svar", svarObject)
      .then((response) => {
        hentTidligereSvar();
      })
      .catch((error) => {
        console.error("Feil ved lagring av svar:", error);
      });
  };

  return (
    <div className="App">
      <SpørsmålsComponent spørsmål="Hva er du takknemlig for? 💛 Skriv ned tre ting som du setter pris på. " />
      <SvarBox vedLagring={Lagrefunksjon} />
      <TidligereSvar svarListe={tidligereSvar} />
    </div>
  );
}

export default SvarSide;
