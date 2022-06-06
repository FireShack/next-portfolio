import Image from "next/image";
import { SiGithub } from "react-icons/si";
import SideBar from "../SideBar";
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
      labels: ["reactjs", "nodejs", "firestore"],
      description: `
      A modern and very complete E-commerce developed with the last technologies. 
      If you are a client, you can use Urban INK in all your favorites devices and 
      buy a lot of pretty clothes, footwear and accessories. If you are an administrator, 
      in the Admin panel you can see all your ecommerce data: charts with statistics, 
      totals earned, manage your products and much more.  
        `,
      github: {
        link: "https://github.com/FireShack?tab=repositories",
        icon: <SiGithub size={25} />,
      },
      img: ecommerce,
    },
    {
      name: "MyJournal",
      type: "Notes App",
      labels: ["reactjs", "firestore", "notes"],
      description:
        "MyJournal is an app for those who want to write and have by FREE all their notes in a website.",
      github: {
        link: "https://github.com/FireShack/MyJournal",
        icon: <SiGithub size={25} />,
      },
      img: journal,
    },
    {
      name: "REST Typescript server (SQL)",
      type: "http server",
      labels: ["typescript", "sql", "server"],
      description:
        "This is a complete rest server, entirely coded with TypeScript. Is a ready to use server to authenticate users. In this case, i used MySQL and Sequalize for handle all users into the DB. It also includes validations, middlewares and configs that makes this server a good starting shell for your next project.",
      github: {
        link: "https://github.com/FireShack/rest-server-vTS",
        icon: <SiGithub size={25} />,
      },
      img: server,
    },
    {
      name: "Food.now",
      type: "Food order app",
      labels: ["vanilla-javascript"],
      description:
        "Entire food ordering app developed with vanilla JS. This app can be used as a template for an ecommerce or as an app for a food market or a bar. Styled with Bootstrap 5.0. Includes an API hosted with JSON-server.",
      github: {
        link: "https://github.com/FireShack/foodApp",
        icon: <SiGithub size={25} />,
      },
      img: food,
    },
    {
      name: "REST Javascript server (MongoDB)",
      type: "http server",
      labels: ["javascript", "mongodb", "server"],
      description:
        "This is a ready to use server. You will be able to make http request for the endpoints that you want. Feel free of clone it and use it. All this server was coded with node.js, the Javascript runtime enviroment, and Express. The last update includes a complete files upload functionality, completely tested and validated. This services works with Cloudinary.",
      github: {
        link: "https://github.com/FireShack/foodApp",
        icon: <SiGithub size={25} />,
      },
      img: server,
    },
    {
      name: "Neighborhoods System",
      type: "Managment system",
      labels: ["python", "tkinter", "sql"],
      description:
        "This project was part of digitalization process. A modernization to migrate all data from paper to a database. They also can manage infractions and have a detailed information about all neighbors.",
      img: hood,
    },
    {
      name: "REST Typescript server (MongoDB)",
      type: "http server",
      labels: ["typescript", "mongodb", "server"],
      description: `This is a complete rest server, entirely coded with TypeScript. Is a ready to use server to server apps like a social media app. Was thinked to serve a blog app, but changing some names and adding a few new features, you will be alowed to serve another app like this.
        In this case, i used MongoDB and Mongoose for handle all data into the DB. It also includes validations, middlewares, interface and configs that makes this server a good starting shell for your next project.`,
      github: {
        link: "https://github.com/FireShack/rest-server-vTS-MongoDB",
        icon: <SiGithub size={25} />,
      },
      img: server,
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
      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-6 text-center">
          <p>Here are some examples of my work. All them made with ❤️.</p>
        </div>
      </div>
      <div className="row d-flex justify-content-around align-items-center mt-4">
        {projects.map((project) => {
          const { name, labels, description, type, github, img } = project;
          return (
            <div key={name}>
              <div className="col-12 col-md-4 mt-3">
                <Image src={img} alt={type} className="rounded-pill" />
              </div>
              <div className="col-12 col-md-6 card-projects p-3 rounded border shadow">
                <div className="fw-bold text-center">
                  <h4>{name}</h4>
                </div>
                <div className="d-flex justify-content-center">
                  {labels.map((label) => {
                    return (
                      <div
                        className="labels--badge p-2 mx-1 rounded-pill text-center"
                        key={label}
                      >
                        {label}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3">
                  <h6 className="text-center">What about this project?</h6>
                  <div className="p-2">{description}</div>
                </div>
                <div className="d-flex justify-content-center mt-2">
                  {github ? (
                    <a
                      href={`${github.link}`}
                      className="btn projects-btn w-100 p-2"
                    >
                      View it on {github.icon}
                    </a>
                  ) : (
                    "No Github public repository"
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
