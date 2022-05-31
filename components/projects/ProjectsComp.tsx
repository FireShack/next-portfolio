import { NextComponentType } from "next";
import { LanguagesSelector } from "../languages/LanguagesSelector";
import SideBar from "../SideBar";

export const ProjectsComp: NextComponentType = () => {
  return (
    <div>
      <LanguagesSelector />
      <SideBar />
    </div>
  );
};
