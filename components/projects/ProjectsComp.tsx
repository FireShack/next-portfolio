import { NextComponentType } from "next";
import { LanguagesSelector } from "../languages/LanguagesSelector";
import SideBar from "../SideBar";

export const ProjectsComp: NextComponentType = () => {
  return (
    <div className="container-styled transition-opacity-effect">
      <SideBar />
    </div>
  );
};
