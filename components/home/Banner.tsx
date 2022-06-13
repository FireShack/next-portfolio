import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SideBar from "../SideBar";
import me from "../images/87921027.jpg";
import { GiTronArrow } from "react-icons/gi";
import es from "../images/es.svg";
import it from "../images/it.svg";
import us from "../images/us.svg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Banner = () => {
  const [language, setLang] = useState("en");
  const lang = [
    {
      es: (
        <Image
          className="bar--language-flag rounded-circle"
          src={es}
          height={25}
          width={25}
          onClick={() => setLang("es")}
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
        />
      ),
    },
  ];

  return (
    <div>
      <div className="row">
        <SideBar />
      </div>
      <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-end justify-content-center avatarHome--background-light">
          <Image src={me} className="rounded-circle" alt="me" />
        </div>
        <div className="col-12 col-md-6 text-center d-flex align-items-center justify-content-center">
          <div className="flex-column">
            <small className="text-muted mt-1">Select your language</small>
            <div className="icon--transform-rotate">
              <GiTronArrow size={30} color="grey" />
            </div>
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
            {language === "en" && (
              <div className="">
                <div className="text-center mb-5 mt-3 text-primary">
                  <h2>Hi! I'm Franco 👋</h2>
                </div>
                <p>
                  I'm a fullstack developer, typing code with technologies like
                  JavaScript, TypeScript or Python. You can read about
                  <Link href="/About">
                    <a className="text-primary"> my skills here. </a>
                  </Link>
                  Now i'm focus on developing robust apps, crossing over a
                  modern design with good ideas that solves problems
                </p>
                <div className="d-flex justify-content-around">
                  <Link href="/Contact">
                    <a className="btn banner-btn w-50 p-2 mt-2">Hire me!</a>
                  </Link>
                </div>
              </div>
            )}
            {language === "it" && (
              <div className="">
                <div className="text-center mb-5 mt-3 text-primary">
                  <h2>Ciao! Sono Franco 👋</h2>
                </div>
                <p>
                  Sono un sviluppatore fullstack, utilizzo tecnologie come
                  JavaScript, TypeScript oppure Python. Puoi leggere su di me{" "}
                  <Link href="/About">
                    <a className="text-primary"> me skills qui. </a>
                  </Link>
                  Ora sono concentrato in sviluppare apps robusti, unendo il
                  disegno moderno con buone idee che possono risolvere problemi
                </p>
                <div className="d-flex justify-content-around">
                  <Link href="/About">
                    <a className="banner-btn w-50 p-2 mt-2">Contattarmi!</a>
                  </Link>
                </div>
              </div>
            )}
            {language === "es" && (
              <div className="">
                <div className="text-center mb-5 mt-3 text-primary">
                  <h2>Hola! Soy Franco 👋</h2>
                </div>
                <p>
                  Soy un desarrollador fullstack, utilizo tecnologias como
                  JavaScript, TypeScript o Python. Lee sobre
                  <Link href="/About">
                    <a className="text-primary"> mis skills aqui. </a>
                  </Link>
                  En este momento estoy enfocado en desarrollar apps robustas,
                  uniendo el diseño moderno con grandes ideas que pueden
                  resolver problemas
                </p>
                <div className="d-flex justify-content-around">
                  <Link href="/About">
                    <a className="banner-btn w-50 p-2 mt-2">Contactame!</a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-end">
          <div className="d-flex flex-column">
            <a href="https://github.com/FireShack">
              <BsGithub color="171515" size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/franco-guardini-68a050242/"
              className="mt-2"
            >
              <BsLinkedin color="0072b1" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
