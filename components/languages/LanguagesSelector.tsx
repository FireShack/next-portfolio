import { useContext, useState } from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import es from "../images/es.svg";
import it from "../images/it.svg";
import us from "../images/us.svg";
import { UseAppContext } from "../../context/state";

export const LanguagesSelector: NextComponentType = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="bar--language-style shadow-sm d-flex justify-content-around">
        <Image
          className="bar--language-flag rounded-circle"
          src={es}
          height={25}
          width={25}
          onClick={() => setLanguage("es")}
        />
        <Image
          className="bar--language-flag rounded-circle"
          src={it}
          height={25}
          width={25}
          onClick={() => setLanguage("it")}
        />
        <Image
          className="bar--language-flag rounded-circle"
          src={us}
          height={25}
          width={25}
          onClick={() => setLanguage("en")}
        />
      </div>
    </div>
  );
};
