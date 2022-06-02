import { BsBook } from "react-icons/bs";
import { GiLaurels } from "react-icons/gi";
import {
  IoChatbubblesOutline,
  IoRocketOutline,
  IoTodayOutline,
} from "react-icons/io5";
import { MdOutlineComputer } from "react-icons/md";
import {
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export const Skills = () => {
  const mySkills = [];

  return (
    <div>
      <div className="text-center">
        <h1 className="mt-3"> How can i help you? </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,{" "}
          <br />
          suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Numquam, suscipit. suscipit. Lorem ipsum dolor sit amet consectetur
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          suscipit.
        </p>
      </div>

      <div className="text-center mt-5">
        <h3>Hard like a stone</h3>
      </div>
      <div className="row icons--bubble-hard p-2">
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center">
          <SiJavascript color="" size={40} />
          <div className="icon--js-badge mx-1"></div>
        </div>
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center">
          <SiPython color="" size={40} />
          <div className="icon--py-badge mx-1"></div>
        </div>
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center">
          <SiTypescript color="" size={40} />
          <div className="icon--ts-badge mx-1"></div>
        </div>
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center">
          <SiMysql color="" size={40} />
          <div className="icon--sql-badge mx-1"></div>
        </div>
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center">
          <SiFirebase color="" size={40} />
          <div className="icon--fs-badge mx-1"></div>
        </div>
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center">
          <SiMongodb color="" size={40} />
          <div className="icon--mgo-badge mx-1"></div>
        </div>
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center">
          <SiNextdotjs color="" size={40} />
          <div className="icon--ne-badge mx-1"></div>
        </div>
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center">
          <SiNodedotjs color="" size={40} />
          <div className="icon--nd-badge mx-1"></div>
        </div>
        <div className="col-12 col-md-4 mt-3 d-flex align-items-center justify-content-center">
          <SiReact color="" size={40} />
          <div className="icon--re-badge mx-1"></div>
        </div>
      </div>
      <div className="text-center mt-5">
        <h3>Soft like a pillow</h3>
      </div>
      <div className="row text-center icons--bubble-soft p-2">
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center flex-column">
          <IoChatbubblesOutline color="" size={40} />
          <span className="">
            Good
            <span className="fw-bold"> communication</span>
          </span>
        </div>
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center flex-column">
          <MdOutlineComputer color="" size={40} />
          <span className="">
            <span className="fw-bold">Hard work</span>, a try harder man
          </span>
        </div>
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center flex-column">
          <BsBook color="" size={40} />
          <span className="">
            In love with
            <span className="fw-bold"> Study </span>
            all kind of things
          </span>
        </div>
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center flex-column">
          <IoTodayOutline color="" size={40} />
          <span className="">
            <span className="fw-bold">Discipline</span> is my engine
          </span>
        </div>
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center flex-column">
          <GiLaurels color="" size={40} />
          <span>
            Always <span className="fw-bold">overcome problems </span>
          </span>
        </div>
        <div className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center flex-column">
          <IoRocketOutline color="" size={40} />
          <span>
            <span className="fw-bold">Focused on </span>
            bettering
          </span>
        </div>
      </div>
    </div>
  );
};
