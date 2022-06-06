import { BsBook } from "react-icons/bs";
import { GiLaurels } from "react-icons/gi";
import {
  IoChatbubblesOutline,
  IoRocketOutline,
  IoTodayOutline,
} from "react-icons/io5";
import { MdOutlineComputer } from "react-icons/md";
import { VscDebugBreakpointData } from "react-icons/vsc";
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
  const hardSkills = [
    {
      icon: <SiJavascript color="" size={40} />,
      span: "icon--js-badge",
    },
    {
      icon: <SiPython color="" size={40} />,
      span: "icon--py-badge",
    },
    {
      icon: <SiTypescript color="" size={40} />,
      span: "icon--ts-badge",
    },
    {
      icon: <SiMysql color="" size={40} />,
      span: "icon--sql-badge",
    },
    {
      icon: <SiFirebase color="" size={40} />,
      span: "icon--fs-badge",
    },
    {
      icon: <SiMongodb color="" size={40} />,
      span: "icon--mgo-badge",
    },
    {
      icon: <SiNextdotjs color="" size={40} />,
      span: "icon--ne-badge",
    },
    {
      icon: <SiNodedotjs color="" size={40} />,
      span: "icon--nd-badge",
    },
    {
      icon: <SiReact color="" size={40} />,
      span: "icon--re-badge",
    },
  ];
  const softSkills = [
    {
      icon: <IoChatbubblesOutline color="" size={40} />,
      span: "Good",
      bold: "Communication",
    },
    {
      icon: <MdOutlineComputer color="" size={40} />,
      span: "Non-stop,",
      bold: "hard work all days",
    },
    {
      icon: <BsBook color="" size={40} />,
      span: "in love with",
      bold: "study all kind of things",
    },
    {
      icon: <IoTodayOutline color="" size={40} />,
      span: "My engine is",
      bold: "Discipline",
    },
    {
      icon: <GiLaurels color="" size={40} />,
      span: "Always",
      bold: "overcome problems",
    },
    {
      icon: <IoRocketOutline color="" size={40} />,
      bold: "bettering",
      span: "Focused on",
    },
  ];

  const planning = [
    {
      icon: <VscDebugBreakpointData color="0070f3" />,
      step: "Define the problem/needs",
    },
    {
      icon: <VscDebugBreakpointData color="0070f3" />,
      step: "Choose techs",
    },
    {
      icon: <VscDebugBreakpointData color="0070f3" />,
      step: `Planing the idea on
      paper (i still use it)`,
    },
    {
      icon: <VscDebugBreakpointData color="0070f3" />,
      step: `Review & correct it (a
        lot of times)`,
    },
    {
      icon: <VscDebugBreakpointData color="0070f3" />,
      step: "Update & maintenance",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-6">
          <h1 className="mt-3 text-center">How can i help you?</h1>
          <p className="">
            I take each project with seriously, applying all my knowledge. When
            i'm developing i focus on the next
            <span className="fw-bold"> structure:</span>
          </p>
          {planning.map((step, i) => {
            return (
              <div className="mt-1" key={i}>
                {step.icon} {step.step}
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-5">
        <h3>Hard like a stone</h3>
      </div>
      <div className="row icons--bubble-hard p-2">
        {hardSkills.map((skill, i) => {
          return (
            <div
              className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center"
              key={i}
            >
              {skill.icon}
              <span className={`${skill.span} mx-1`}></span>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-5">
        <h3>Soft like a pillow</h3>
      </div>
      <div className="row text-center icons--bubble-soft p-2">
        {softSkills.map((skill, i) => {
          return (
            <div
              className="col-6 col-md-4 mt-3 d-flex align-items-center justify-content-center flex-column"
              key={i}
            >
              {skill.icon}
              <span className="">
                {skill.span}
                <span className="fw-bold"> {skill.bold}</span>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
