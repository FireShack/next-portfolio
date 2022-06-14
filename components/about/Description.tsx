import { useState } from "react";
import Image from "next/image";
import SideBar from "../SideBar";
import { Skills } from "./Skills";
import teamAv from "../images/casual-life-3d-young-man-sitting-in-front-of-laptop.png";
import ubication from "../images/casual-life-3d-pink-location-marker.png";
import es from "../images/es.svg";
import it from "../images/it.svg";
import us from "../images/us.svg";

export const Description = () => {
  const [language, setLang]: [string, Function] = useState("en");
  const lang = [
    {
      es: (
        <Image
          className="bar--language-flag rounded-circle"
          src={es}
          height={25}
          width={25}
          onClick={() => setLang("es")}
          alt="es"
        />
      ),
    },
    {
      it: (
        <Image
          className="bar--language-flag rounded-circle"
          src={it}
          height={25}
          width={25}
          onClick={() => setLang("it")}
          alt="it"
        />
      ),
    },
    {
      en: (
        <Image
          className="bar--language-flag rounded-circle"
          src={us}
          height={25}
          width={25}
          onClick={() => setLang("en")}
          alt="en"
        />
      ),
    },
  ];

  return (
    <div>
      <div className="row">
        <SideBar />
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center avatarAbout--background-image">
          <Image src={teamAv} alt="working" />
        </div>
        <div className="col-12 col-md-5 d-flex align-items-center">
          <div className="">
            <div className="d-flex justify-content-center mt-2">
              <div className="bar--language-style shadow-sm d-flex justify-content-around">
                {lang.map((lan, i) => {
                  return (
                    <div key={i}>
                      {lan.en}
                      {lan.it}
                      {lan.es}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="">
              {language === "en" && (
                <div>
                  <div className="mb-5 mt-3">
                    <h2>Who i am?</h2>
                  </div>
                  <p>
                    In few words, i&apos;m a man who loves to develop high quality
                    web apps. I&apos;m specializing in JavaScript/TypeScript techs,
                    like Reactjs, Nextjs or Nodejs. I also developed projects
                    with Python. I was born in Argentina but i&apos;m italian
                    cittizen and i live in Italy now. I love to learn new
                    things, and if there are about software world, better!
                    <br /> <br />
                    For me, the continue learning is very important. That&apos;s why
                    i&apos;m on the way to become an {" "}
                    <span className="fw-bold">
                      Informatic/Electronic Engineer
                    </span>
                  </p>
                </div>
              )}
              {language === "it" && (
                <div className="">
                  <div className="mb-5 mt-3">
                    <h2 className="">Chi sono io?</h2>
                  </div>   
                  <p>
                    In poche parole, sono un uomo che ama sviluppare &quot;high
                    quality&quot; web apps. Mi sto specializzando in
                    JavaScript/TypeScript techs, come Reactjs, Nextjs oppure
                    Nodejs. Ho sviluppato proggeti anche con Python. Sono nato
                    in Argentina, ma sono cittadino italiano e addeso vivo in
                    Italia. Mi piace imparare cose nuove, e se sono di software,
                    meglio!
                    <br /> <br />
                    Per me il l&apos;apprendimento continuo è molto importante. Ecco
                    perchè sono in il percorso di diventare
                    <span className="fw-bold">
                      Ingegniero Informatico/Elettronico
                    </span>
                  </p>
                </div>
              )}
              {language === "es" && (
                <div className="">
                  <div className="mb-5 mt-3">
                    <h2 className="">¿Quién soy?</h2>
                  </div>
                  <p>
                    En pocas palabras, soy una persona que ama desarrollar web
                    apps robustas. Me estoy especializando en
                    JavaScript/TypeScript techs, como Reactjs, Nextjs o Nodejs.
                    También he desarrollado proyectos con Python. Nací en
                    Argentina, pero soy ciudadano italiano, por eso ahora vivo
                    en Italia. Me gusta aprender cosas nuevas, y si son sobre el
                    mundo del software, mejor! <br /> <br />
                    Para mí el aprendizaje continuo es muy importante. Es por
                    eso que estoy en camino a convertirme en
                    <span className="fw-bold">
                      Ingeniero Informatico/Electrónico
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-4">
          <Image src={ubication} alt="ubication" />
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <h1>
            <span className="about--text-color-1">ALESSA</span>
            <span className="about--text-color-2">NDRIA,</span>
            <span className="about--text-color-3"> ITALY</span>
          </h1>
        </div>
      </div>
      <div className="row">
        <Skills />
      </div>
    </div>
  );
};
