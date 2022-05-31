import { LanguagesSelector } from "../languages/LanguagesSelector";
import { AiOutlineDownload } from "react-icons/ai";
import Banner from "./Banner";

export const HomeComp = () => {
  return (
    <div className="d-flex justify-content-center">
      <Banner />
      <button className="btn btn-outline-dark position-absolute mt-3">
        CV <AiOutlineDownload />
      </button>
    </div>
  );
};
