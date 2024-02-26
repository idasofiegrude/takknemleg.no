import React, { useState } from "react";
import SvarDetaljer from "./SvarDetaljer";
import Arrow from "./Arrow";

// const SvarListe = ({ svarListe }) => {
//   const [åpneSvar, setÅpneSvar] = useState([]);

//   const toggleSvar = (svarId) => {
//     setÅpneSvar(
//       åpneSvar.includes(svarId)
//         ? åpneSvar.filter((id) => id !== svarId)
//         : [...åpneSvar, svarId]
//     );
//   };

//   return (
//     <section className="svarliste">
//       <h1>Våre takknemligheter:</h1>

//       {svarListe.map((enkelSvar) => (
//         <React.Fragment key={enkelSvar.svar_id}>
//           <div
//             onClick={() => toggleSvar(enkelSvar.svar_id)}
//             className="klikkbart-svar"
//           >
//             <span className="tidligere-svar-rad">
//               {enkelSvar.overskrift}
//               <Arrow />
//             </span>
//           </div>
//           {åpneSvar.includes(enkelSvar.svar_id) && (
//             <SvarDetaljer svar={enkelSvar} />
//           )}
//         </React.Fragment>
//       ))}
//     </section>
//   );
// };

// export default SvarListe;

const SvarListe = ({ svarListe }) => {
  const [åpneSvar, setÅpneSvar] = useState([]);

  const toggleSvar = (svarId) => {
    setÅpneSvar(
      åpneSvar.includes(svarId)
        ? åpneSvar.filter((id) => id !== svarId)
        : [...åpneSvar, svarId]
    );
  };

  return (
    <section className="svarliste">
      <h1>Våre takknemligheter:</h1>

      {svarListe.map((enkelSvar) => {
        // Hjelpefunksjon definert her
        const handleSvarClick = () => {
          toggleSvar(enkelSvar.svar_id);
        };

        return (
          <React.Fragment key={enkelSvar.svar_id}>
            <div onClick={handleSvarClick} className="klikkbart-svar">
              <span className="tidligere-svar-rad">
                {enkelSvar.overskrift}
                <Arrow />
              </span>
            </div>
            {åpneSvar.includes(enkelSvar.svar_id) && (
              <SvarDetaljer svar={enkelSvar} />
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default SvarListe;
