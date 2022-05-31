import { NextComponentType } from "next";
import { AiOutlineDownload } from "react-icons/ai";
import { LanguagesSelector } from "../languages/LanguagesSelector";
import { Description } from "./Description";

export const AboutComp: NextComponentType = () => {
  return (
    <div className="d-flex justify-content-center">
      <Description />
      <button className="btn btn-outline-dark position-fixed mt-3">
        CV <AiOutlineDownload />
      </button>
    </div>
  );
};
