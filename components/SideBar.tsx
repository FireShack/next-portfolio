import { useState } from "react";
import type { NextComponentType } from "next";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import fireIcon from "../public/icons8-elemento-fuego-32.png";

const SideBar: NextComponentType = () => {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <AiOutlineHome size={25} />,
    },
    {
      name: "About",
      link: "/About",
      icon: <SiAboutdotme size={25} />,
    },
    {
      name: "Work",
      link: "/Projects",
      icon: <MdWorkOutline size={25} />,
    },
    {
      name: "Contact",
      link: "/Contact",
      icon: <RiMailSendLine size={25} />,
    },
    {
      name: "Blog",
      link: "/Blog",
      icon: <FaRegNewspaper size={25} />,
    },
  ];

  const downloadCv = () => {
    fetch("/api/download").then((res) => console.log(res));
  };

  return (
    <>
      <div
        className={
          !open
            ? "col-4 col-md-2 border-end sidebar sidebar-close fixed-top"
            : "col-5 col-md-2 border-end sidebar sidebar-open fixed-top"
        }
      >
        {/* <div className="d-flex justify-content-evenly mt-3">
          <div className="d-flex justify-content-center">
            {
              <>
                {theme === "light" && (
                  <div
                    className="text-center"
                    onClick={() => setTheme("dark")}
                    role="button"
                  >
                    <BsFillSunFill
                      className="icon--transition-rotate"
                      size={30}
                    />
                    <p>Light</p>
                  </div>
                )}
                {theme === "dark" && (
                  <div
                    className="text-center"
                    onClick={() => setTheme("random")}
                    role="button"
                  >
                    <BsMoonStarsFill
                      className="icon--transition-rotate"
                      size={30}
                    />
                    <p>Dark</p>
                  </div>
                )}
                {theme === "random" && (
                  <div
                    className="text-center"
                    role="button"
                    onClick={() => setTheme("light")}
                  >
                    <GiUfo className="icon--transition-scale" size={30} />
                    <p>Future</p>
                  </div>
                )}
              </>
            }
          </div>
        </div> */}
        <div>
          <div className="d-flex justify-content-center mt-3">
            <Image src={fireIcon} alt="fire icon" />
          </div>
          <h4 className="text-center special-fonts">FireShack</h4>
        </div>

        {navItems.map((item) => {
          const { name, link, icon } = item;
          return (
            <div className="sidebar-link-items" key={name}>
              <Link href={link}>
                <a>
                  <div className="row mt-5 p-2 sidebar--icon-bg">
                    <div className="col-3">{icon}</div>
                    <div className="col-9 text-center">{name}</div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center mt-1 fixed-top">
        <a
          download
          href="/vercel.svg"
          className="sidebar--cv-btn"
          // onClick={downloadCv}
        >
          CV <AiOutlineDownload />
        </a>
      </div>
      <div className="menu-icon d-flex justify-content-end mt-1 fixed-top">
        {/* <BiMenuAltRight size={45} /> */}
        <div
          className="menu--icon-transition"
          role="button"
          onClick={() => setOpen(open ? false : true)}
        >
          {!open ? (
            <>
              <div className="menu--icon-bar-1 mt-1"></div>
              <div className="menu--icon-bar-2 mt-1"></div>
              <div className="menu--icon-bar-3 mt-1"></div>
            </>
          ) : (
            <>
              <div className="menu--icon-bar-1 mt-1 menu--icon-open-bar-1"></div>
              <div className="menu--icon-bar-2 mt-1 menu--icon-open-bar-2"></div>
              <div className="menu--icon-bar-3 mt-1 menu--icon-open-bar-3"></div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
