import React from "react";

// her tas hele propsobjektet inn, det vil si at for hver prop vi sender inn i parent component ligger det en field
// alternativ kunne man dekomponert props objektet
function SpørsmålsComponent({ spørsmål }) {
  return <section className="SpørsmålsComponent">{spørsmål}</section>;
}

export default SpørsmålsComponent;
