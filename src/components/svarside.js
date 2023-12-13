import React, { useState } from "react";

import SvarBox from "./SvarBox";
import SpørsmålsComponent from "./SpørsmålComponent";
import TidligereSvar from "./TidligereSvar";

import "../index.css";

function SvarSide() {
  const [tidligereSvar, setTidligereSvar] = useState([
    {
      navn: "Ida",
      overskrift: "Tre takk",
      innhold: "Takk for sol. Takk for at gelato finnes. Takk for høstfarger.",
      id: 1,
    },
    {
      navn: "Ida",
      overskrift: "Folk i livet mitt",
      innhold:
        "Takk for at Ole vil vær me meg. Takk for at mamma e der for meg",
      id: 2,
    },
    {
      navn: "Ida",
      overskrift: "Mat",
      innhold:
        "Takk for at kyllingsalaten blei så god. Takk for at me har med oss lunsj og kan spisa oss mette.",
      id: 3,
    },
  ]);

  let [idCounter, setIdCounter] = useState(4);

  function Lagrefunksjon(svaret) {
    let svarObject = {
      navn: "Ida",
      overskrift: "Midlertidig overskrift",
      innhold: svaret,
      id: idCounter,
    };
    setIdCounter(idCounter + 1);
    let nySvarliste = [svarObject, ...tidligereSvar];
    setTidligereSvar(nySvarliste);
  }

  return (
    <div className="App">
      <SpørsmålsComponent spørsmål="List tre ting du er takknemlig for idag." />

      <SvarBox funksjonSomLagrer={Lagrefunksjon} />

      <TidligereSvar svarListe={tidligereSvar} />
    </div>
  );
}

export default SvarSide;
