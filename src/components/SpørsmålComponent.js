import React from "react";

// her tas hele propsobjektet inn, det vil si at for hver prop vi sender inn i parent component ligger det en field
// alternativ kunne man dekomponert props objektet
function SpørsmålsComponent({ sprøsmål }) {
  return <section className="SpørsmålsComponent">{sprøsmål}</section>;
}

export default SpørsmålsComponent;
