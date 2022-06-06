import SideBar from "../SideBar";
import { ImLocation } from "react-icons/im";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import contactAv from "../images/casual-life-3d-man-talking-on-the-phone.png";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Form = () => {
  return (
    <>
      <div className="row">
        <SideBar />
      </div>
      <div className="mt-4">
        <div className="text-center">
          <h2>Get in touch!</h2>
          <p>
            You can send me an email using the form below, call me or throw my
            social networks.
          </p>
        </div>
        <div className="row mt-5 d-flex justify-content-around">
          <div className="col-12 col-md-5 contact-info">
            <Image src={contactAv} alt="contact" />
            <div className="d-flex align-items-center justify-content-around mb-2">
              <a href="">
                <BsLinkedin color="0072b1" size={35} />
              </a>
              <a href="https://github.com/FireShack">
                <BsGithub color="171515" size={35} />
              </a>
            </div>
          </div>

          <div className="col-12 col-md-5 shadow-lg contact--form-box">
            <div className="text-center p-2">
              <h2>Send me an email</h2>
            </div>
            <div className="row p-2">
              <input
                type="text"
                className="contact--form-input p-2"
                placeholder="Name"
              />
            </div>
            <div className="row p-2">
              <input
                type="mail"
                className="contact--form-input p-2"
                placeholder="example@addres.com"
              />
            </div>
            <div className="row p-2">
              <textarea
                className="contact--form-input p-2"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="row mt-3 p-2 d-flex justify-content-center">
              <button className="contact--form-btn p-2 w-75">
                Send <FiSend size={20} />
              </button>
            </div>
            <div className="row">
              <div className="mt-2">
                <div className="d-flex justify-content-center">
                  <div className="col-6 text-center">
                    <ImLocation color="00296b" size={25} />
                  </div>
                  <div className="col-6">
                    <p>Alessandria, Italy</p>
                  </div>
                </div>
                <div className="d-flex justify-content-around mt-3">
                  <div className="col-6 text-center">
                    <IoPhonePortraitOutline
                      className="contact--icon-border"
                      color="00296b"
                      size={25}
                    />
                  </div>
                  <div className="col-6">
                    <p>+393478238707</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
