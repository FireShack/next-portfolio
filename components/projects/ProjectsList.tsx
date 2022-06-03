import Image from "next/image";
import { SiGithub } from "react-icons/si";
import SideBar from "../SideBar";
import cardImg from "../images/casual-life-3d-boy-sitting-in-front-of-laptop.png";
import journal from "../images/photo-1624627279963-1831ffa3d170.avif";
import ecommerce from "../images/photo-1521572163474-6864f9cf17ab.avif";
import server from "../images/photo-1644250818976-8cf0561a831f.avif";
import food from "../images/photo-1569718212165-3a8278d5f624.avif";
import hood from "../images/photo-1533559039193-b4624a03cfca.avif";

export const ProjectsList = () => {
  const projects = [
    {
      name: "Urban INK",
      type: "Ecommmerce",
      labels: ["reactjs ", "nodejs ", "firestore "],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at blanditiis voluptate magni possimus suscipit.",
      github: {
        name: "https://github.com/FireShack?tab=repositories",
        icon: <SiGithub size={25} />,
      },
      img: ecommerce,
      link: "https://github.com/FireShack/urbanink"
    },
    {
      name: "MyJournal",
      type: "Notes App",
      labels: ["reactjs ", "firestore ", "notes "],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at blanditiis voluptate magni possimus suscipit.",
      github: {
        name: "https://github.com/FireShack?tab=repositories",
        icon: <SiGithub size={25} />,
      },
      img: journal,
      link: "https://github.com/FireShack/MyJournal"
    },
    {
        name: "REST Typescript server",
        type: "http server",
      labels: ["typescript ", "sql ", "server "],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at blanditiis voluptate magni possimus suscipit.",
        github: {
            name: "https://github.com/FireShack?tab=repositories",
            icon: <SiGithub size={25} />,
        },
        img: server,
        link: "https://github.com/FireShack/rest-server-vTS"
    },
    {
      name: "Food.now",
      type: "Food order app",
      labels: ["vanilla-javascript"],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at blanditiis voluptate magni possimus suscipit.",
      github: {
        name: "https://github.com/FireShack?tab=repositories",
        icon: <SiGithub size={25} />,
      },
      img: food,
      link: "https://github.com/FireShack/foodApp"
    },
    {
      name: "REST Javascript server",
      type: "http server",
      labels: ["javascript ", "mongodb ", "server "],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at blanditiis voluptate magni possimus suscipit.",
      github: {
        name: "https://github.com/FireShack?tab=repositories",
        icon: <SiGithub size={25} />,
      },
      img: server,
      link: "https://github.com/FireShack/rest-server"
    },
    {
      name: "Neighborhoods System",
      type: "Managment system",
      labels: ["python ", "tkinter ", "sql "],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at blanditiis voluptate magni possimus suscipit.",
      github: {
        name: "https://github.com/FireShack?tab=repositories",
        icon: <SiGithub size={25} />,
      },
      img: hood,
      link: "https://github.com/FireShack/rest-server"
    },
    {
      name: "REST Typescript server (MongoDB)",
      type: "http server",
      labels: ["typescript ", "mongodb ", "server "],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at blanditiis voluptate magni possimus suscipit.",
      github: {
        name: "https://github.com/FireShack?tab=repositories",
        icon: <SiGithub size={25} />,
      },
      img: server,
      link: "https://github.com/FireShack/rest-server"
    },
  ];

  return (
    <div>
      <div className="row">
        <SideBar />
      </div>
      <div className="text-center mt-4">
        <h1>My selected projects</h1>
      </div>
      <div className="text-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque <br />
          distinctio quasi at. Soluta sequi iste aperiam, aliquid laudantium
          <br />
          voluptates ducimus deserunt, facere necessitatibus accusamus facilis!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magni
          <br />
          inventore minima ipsam, alias iure. <br />
        </p>
      </div>
      <div className="row d-flex justify-content-around align-items-center mt-4">
        {projects.map((project) => {
          const { name, labels, description, type, github, img } = project;
          return (
            <>
              <div className="col-12 col-md-4 mt-3">
                <Image src={img} alt={type} className="rounded-pill" />
              </div>
              <div className="col-12 col-md-6 card-projects rounded shadow mt-2">
                <div className="fw-bold text-center">
                  <h4>{name}</h4>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="labels--badge p-2 rounded-pill">{labels}</div>
                </div>
                <div className="mt-3">
                  <h6 className="text-center">What about this project?</h6>
                  <div className="p-2">{description}</div>
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <a
                    href={`${github.name}`}
                    className="projects-btn w-100 p-2"
                  >
                    View it on {github.icon}
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
