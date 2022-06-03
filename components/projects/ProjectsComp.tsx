import { NextComponentType } from "next";
import { ProjectsList } from "./ProjectsList";

export const ProjectsComp: NextComponentType = () => {
  return (
    <div className="container-styled transition-opacity-effect">
      <div className="d-flex justify-content-center">
        <ProjectsList />
      </div>
    </div>
  );
};
