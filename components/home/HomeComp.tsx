import { LanguagesSelector } from "../languages/LanguagesSelector";
import Banner from "./Banner";

export const HomeComp = () => {
  return (
    <div className="container-styled transition-opacity-effect">
      <div className="d-flex justify-content-center">
        <Banner />
      </div>
    </div>
  );
};
