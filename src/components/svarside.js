// import React, { useState } from "react";
// import SvarBox from "./SvarBox";
// import SpørsmålsComponent from "./SpørsmålComponent";
// import TidligereSvar from "./TidligereSvar";
// import API from "../../api";

// import "../index.css";

// function SvarSide() {
//   const [tidligereSvar, setTidligereSvar] = useState([
//     {
//       navn: "Ida",
//       overskrift: "Tre takk",
//       innhold: "Takk for sol. Takk for at gelato finnes. Takk for høstfarger.",
//       id: 1,
//     },
//     {
//       navn: "Ida",
//       overskrift: "Takk for muligheten",
//       innhold: "Takk for muligheten t å reisa.",
//       id: 2,
//     },
//     {
//       navn: "Ida",
//       overskrift: "Mat",
//       innhold: "Takk for at kyllingsalaten blei så god.",
//       id: 3,
//     },
//   ]);

//   let [idCounter, setIdCounter] = useState(4);

// //   function Lagrefunksjon(svaret) {
// //     let svarObject = {
// //       navn: "Ida",
// //       overskrift: "Midlertidig overskrift",
// //       innhold: svaret,
// //       id: idCounter,
// //     };
// //     setIdCounter(idCounter + 1);
// //     let nySvarliste = [svarObject, ...tidligereSvar];
// //     setTidligereSvar(nySvarliste);
// //   }

// //   return (
// //     <div className="App">
// //       <SpørsmålsComponent spørsmål="List tre ting du er takknemlig for idag." />

// //       <SvarBox funksjonSomLagrer={Lagrefunksjon} />

// //       <TidligereSvar svarListe={tidligereSvar} />
// //     </div>
// //   );
// // }

// function Lagrefunksjon(svaret) {
//   let svarObject = {
//     navn: "Ida",
//     overskrift: "Midlertidig overskrift",
//     innhold: svaret,
//     id: idCounter,
//   };
//   setIdCounter(idCounter + 1);
//   let nySvarliste = [svarObject, ...tidligereSvar];
//   setTidligereSvar(nySvarliste);

//   // Send POST-forespørsel til Flask API
//   API.post('/post/svar', svarObject)
//     .then(response => {
//       console.log('Svar lagret:', response.data);
//     })
//     .catch(error => {
//       console.error('Feil ved lagring av svar:', error);
//     });
// }

// export default SvarSide;

import React, { useState, useEffect } from "react";
import SvarBox from "./SvarBox";
import SpørsmålsComponent from "./SpørsmålComponent";
import TidligereSvar from "./TidligereSvar";
import API from "../api";

import "../index.css";

function SvarSide() {
  const [tidligereSvar, setTidligereSvar] = useState([]);

  useEffect(() => {
    const hentTidligereSvar = async () => {
      try {
        const response = await API.get("http://localhost:8080/svar");
        setTidligereSvar(response.data);
      } catch (error) {
        console.error("Feil ved henting av tidligere svar:", error);
      }
    };

    hentTidligereSvar();
  }, []); // Denne effekten kjøres kun én gang når komponenten monteres

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

    // Send POST-forespørsel til Flask API
    API.post("http://localhost:8080/svar", svarObject)
      .then((response) => {
        console.log("Svar lagret:", response.data);
      })
      .catch((error) => {
        console.error("Feil ved lagring av svar:", error);
      });
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
