import Image from "next/image";
import SideBar from "../SideBar";
import meIn from "../images/photo-1570295999919-56ceb5ecca61 (1).avif";
import meAv from "../images/casual-life-3d-boy-sitting-in-front-of-laptop.png";
import { LanguagesSelector } from "../languages/LanguagesSelector";
import { useContext } from "react";
import { UseAppContext } from "../../context/state";
import { GiTronArrow } from "react-icons/gi";

const Banner = () => {
  const { language } = useContext(UseAppContext);
  return (
    <div>
      <div className="row">
        <SideBar />
      </div>
      <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-end justify-content-center avatarHome--background-image">
          <Image src={meAv} alt="me" />
        </div>
        <div className="col-12 col-md-6 text-center d-flex align-items-center">
          <div className="flex-column">
            <small className="text-muted mt-1">Select your language</small>
            <div className="icon--transform-rotate">
              <GiTronArrow size={30} color="grey" />
            </div>
            <div>
              <LanguagesSelector />
            </div>
            <div className="text-center mb-5 mt-3">
              <h2>Hi!</h2>
            </div>
            {language === "en" && (
              <div className="">
                <p>
                  English: Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Quibusdam illo error, debitis quod esse quidem molestias
                  sapiente praesentium officia at laborum similique mollitia
                  dignissimos. Exercitationem?
                </p>
                <button className="btn btn-outline-dark rounded-0 w-100 p-2 mt-2">
                  More about me
                </button>
              </div>
            )}
            {language === "it" && (
              <div className="">
                <p>
                  Italiano: Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Quibusdam illo error, debitis quod esse quidem molestias
                  sapiente praesentium officia at laborum similique mollitia
                  dignissimos. Exercitationem?
                </p>
                <button className="btn btn-outline-dark rounded-0 w-100 p-2 mt-2">
                  More about me
                </button>
              </div>
            )}
            {language === "es" && (
              <div className="">
                <p>
                  Español: Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Quibusdam illo error, debitis quod esse quidem molestias
                  sapiente praesentium officia at laborum similique mollitia
                  dignissimos. Exercitationem?
                </p>
                <button className="btn btn-outline-dark rounded-0 w-100 p-2 mt-2">
                  More about me
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
