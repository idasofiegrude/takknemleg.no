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

import React, { useState } from "react";
import SvarBox from "./SvarBox";
import SpørsmålsComponent from "./SpørsmålComponent";
import TidligereSvar from "./TidligereSvar";
import API from "../api";

import "../index.css";

function SvarSide() {
  const [tidligereSvar, setTidligereSvar] = useState([
    // Eksempeldata, dette kan også hentes fra API-et
    {
      navn: "Ida",
      overskrift: "Tre takk",
      innhold: "Takk for sol. Takk for at gelato finnes. Takk for høstfarger.",
      id: 1,
    },
    {
      navn: "Ida",
      overskrift: "Takk for muligheten",
      innhold: "Takk for muligheten t å reisa.",
      id: 2,
    },
    {
      navn: "Ida",
      overskrift: "Mat",
      innhold: "Takk for at kyllingsalaten blei så god.",
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

    // Send POST-forespørsel til Flask API
    API.post("http://localhost:8080/post/svar", svarObject)
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
