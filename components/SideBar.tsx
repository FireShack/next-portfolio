import type { NextComponentType } from "next";
import { useState } from "react";
import Link from "next/link";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { GiUfo } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";

const SideBar: NextComponentType = () => {
  const [theme, setTheme] = useState("light");

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
      link: "/Contact",
      icon: <FaRegNewspaper size={25} />,
    },
  ];

  return (
    <>
      <div className="col-3 col-md-1 border-end sidebar fixed-top">
        <div className="d-flex justify-content-evenly mt-3">
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
        </div>

        <>
          {navItems.map((item) => {
            const { name, link, icon } = item;
            return (
              <div className="sidebar-link-items" key={name}>
                <Link href={link}>
                  <a>
                    <div className="row mt-5 border rounded-pill p-2 sidebar--icon-bg">
                      {icon}
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </>
      </div>
      <div className="d-flex justify-content-end mt-1 fixed-top cursor-pointer">
        <BiMenuAltRight size={40} />
      </div>
    </>
  );
};

export default SideBar;
