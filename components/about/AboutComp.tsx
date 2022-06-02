import { NextComponentType } from "next";
import { AiOutlineDownload } from "react-icons/ai";
import { LanguagesSelector } from "../languages/LanguagesSelector";
import { Description } from "./Description";

export const AboutComp: NextComponentType = () => {
  return (
    <div className="container-styled transition-opacity-effect">
      <div className="d-flex justify-content-center">
        <Description />
      </div>
    </div>
  );
};
