import type { NextComponentType } from "next";
import Link from "next/link";

const SideBar: NextComponentType = () => {
  return (
    <div className="col-5 col-md-2 col-lg-2 navside-bg border-end sidebar">
      <div className="row">
        <div className="d-flex justify-content-center mt-3"></div>
        <div className="col mt-5 border-bottom">
          <div className="d-flex justify-content-center"></div>
          <div>
            <h5 className="text-center mt-3">Name</h5>
          </div>
        </div>
      </div>
      <Link href="/">
        <a>
          <div className="row">
            <div className="col-12 p-3 nav-item-bg rounded-start rounded-pill shadow">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-8 d-flex align-items-center">Home</div>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/About">
        <a>
          <div className="row">
            <div className="col-12 p-3">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-8 d-flex align-items-center">About me</div>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/Projects">
        <a>
          <div className="row">
            <div className="col-12 p-3">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-8 d-flex align-items-center">Projects</div>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/Contact">
        <a>
          <div className="row">
            <div className="col-12 p-3">
              <div className="row d-flex align-items-center">
                <div className="col-8 d-flex align-items-center">Contact</div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default SideBar;
