import { useContext } from "react";
import Image from "next/image";
import { UseAppContext } from "../../context/state";
import { LanguagesSelector } from "../languages/LanguagesSelector";
import SideBar from "../SideBar";
import { Skills } from "./Skills";
import teamAv from "../images/casual-life-3d-young-man-sitting-in-front-of-laptop.png";
import studyAv from "../images/casual-life-3d-young-man-surrounded-by-gadgets-taking-notes.png";
import ubication from "../images/casual-life-3d-pink-location-marker.png";
import it from "../images/it.svg";

export const Description = () => {
  const { language } = useContext(UseAppContext);

  const aboutMe = [
    {
      title: "Who i am?",
      en: ` English: In few words Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Quibusdam illo error, debitis quod esse
      quidem molestias sapiente praesentium officia at laborum
      similique mollitia dignissimos. Exercitationem? sapiente
      praesentium officia at laborum similique mollitia dignissimos.
      Exercitationem?`,
      it: ` Italiano: In few words Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Quibusdam illo error, debitis quod esse
      quidem molestias sapiente praesentium officia at laborum
      similique mollitia dignissimos. Exercitationem? sapiente
      praesentium officia at laborum similique mollitia dignissimos.
      Exercitationem?`,
      es: ` Spanish: In few words Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Quibusdam illo error, debitis quod esse
      quidem molestias sapiente praesentium officia at laborum
      similique mollitia dignissimos. Exercitationem? sapiente
      praesentium officia at laborum similique mollitia dignissimos.
      Exercitationem?`,
    },
    {
      title: "And.. your skills?",
      en: ` English: In few words Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Quibusdam illo error, debitis quod esse
      quidem molestias sapiente praesentium officia at laborum
      similique mollitia dignissimos. Exercitationem? sapiente
      praesentium officia at laborum similique mollitia dignissimos.
      Exercitationem?`,
      it: ` Italiano: In few words Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Quibusdam illo error, debitis quod esse
      quidem molestias sapiente praesentium officia at laborum
      similique mollitia dignissimos. Exercitationem? sapiente
      praesentium officia at laborum similique mollitia dignissimos.
      Exercitationem?`,
      es: ` Spanish: In few words Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Quibusdam illo error, debitis quod esse
      quidem molestias sapiente praesentium officia at laborum
      similique mollitia dignissimos. Exercitationem? sapiente
      praesentium officia at laborum similique mollitia dignissimos.
      Exercitationem?`,
    },
  ];

  return (
    <div>
      <div className="row">
        <SideBar />
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center avatarAbout--background-image">
          <Image src={teamAv} alt="working" />
        </div>
        <div className="col-12 col-md-5 text-center d-flex align-items-center">
          <div className="">
            <div>
              <LanguagesSelector />
            </div>
            <div className="text-center mb-5 mt-3">
              <h2 className="">Who i am?</h2>
            </div>
            <div className="">
              {language === "en" && (
                <div className="">
                  <p>
                    English: In few words Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Quibusdam illo error, debitis
                    quod esse quidem molestias sapiente praesentium officia at
                    laborum similique mollitia dignissimos. Exercitationem?
                    sapiente praesentium officia at laborum similique mollitia
                    dignissimos. Exercitationem?
                  </p>
                </div>
              )}
              {language === "it" && (
                <div className="">
                  <p>
                    Italiano: Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Quibusdam illo error, debitis quod esse
                    quidem molestias sapiente praesentium officia at laborum
                    similique mollitia dignissimos. Exercitationem?
                  </p>
                </div>
              )}
              {language === "es" && (
                <div className="">
                  <p>
                    Español: Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Quibusdam illo error, debitis quod esse quidem
                    molestias sapiente praesentium officia at laborum similique
                    mollitia dignissimos. Exercitationem?
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 text-center d-flex align-items-center">
          <div className="">
            <div className="text-center mb-5 mt-3">
              <h2 className="">Where i'm now?</h2>
            </div>
            <div className="">
              {
                // Colocar un map
              }

              {language === "en" && (
                <div className="">
                  <p>
                    English: In few words Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Quibusdam illo error, debitis
                    quod esse quidem molestias sapiente praesentium officia at
                    laborum similique mollitia dignissimos. Exercitationem?
                    sapiente praesentium officia at laborum similique mollitia
                    dignissimos. Exercitationem?
                  </p>
                </div>
              )}
              {language === "it" && (
                <div className="">
                  <p>
                    Italiano: Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Quibusdam illo error, debitis quod esse
                    quidem molestias sapiente praesentium officia at laborum
                    similique mollitia dignissimos. Exercitationem?
                  </p>
                </div>
              )}
              {language === "es" && (
                <div className="">
                  <p>
                    Español: Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Quibusdam illo error, debitis quod esse quidem
                    molestias sapiente praesentium officia at laborum similique
                    mollitia dignissimos. Exercitationem?
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-end avatarConst--background-image">
          <Image src={studyAv} alt="studying" />
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
