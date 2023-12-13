import React, { useState } from "react";

function HamburgerMenu() {
  /*
useState(false): Dette er som å si 
  "Hei, React, jeg trenger et stykke data som 
  kan endre seg. Akkurat nå er det false 
  (som betyr at menyen vår er lukket)." 
 */

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /*
  const [isMenuOpen, setIsMenuOpen]: Dette er som å si "React, gi meg to ting:
En måte å holde øye med om menyen er åpen eller ikke, la oss kalle dette isMenuOpen.
En funksjon som lar meg endre denne tilstanden, og vi skal kalle den setIsMenuOpen." */

  return (
    <div>
      <button>Meny</button>
    </div>
  );
}

export default HamburgerMenu;
