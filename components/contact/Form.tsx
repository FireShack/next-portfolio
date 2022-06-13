import SideBar from "../SideBar";
import { ImLocation } from "react-icons/im";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import contactAv from "../images/casual-life-3d-man-talking-on-the-phone.png";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SyntheticEvent, useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState({
    code: 0,
    loading: false,
    statusMsg: "",
  });

  const resetState = () => {
    setTimeout(() => {
      setStatus({
        code: 0,
        loading: false,
        statusMsg: "",
      });
    }, 3000);
  };

  const userData = {
    name,
    email,
    msg,
  };

  const sendData = (e: SyntheticEvent) => {
    e.preventDefault();
    // Start loading
    setStatus({
      code: 0,
      loading: true,
      statusMsg: "Sending",
    });
    // Request to the api
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(userData),
    })
      .then((res: any) => {
        // Good response
        if (res.status === 200) {
          setStatus({
            code: res.status,
            loading: false,
            statusMsg: "Mail sended successfully!",
          });
          // Reset the state
          resetState();
          return;
        }
        // Something went wrong
        setStatus({
          code: res.status,
          loading: false,
          statusMsg: "Something went wrong, try again!",
        });
        resetState();
      })
      .catch((err) => {
        setStatus({
          code: 500,
          loading: false,
          statusMsg: err,
        });
      });
  };

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
            <div className="d-flex align-items-center justify-content-around mb-2 bg-white">
              <a href="https://www.linkedin.com/in/franco-guardini-68a050242/">
                <BsLinkedin color="0072b1" size={35} />
              </a>
              <a href="https://github.com/FireShack">
                <BsGithub color="171515" size={35} />
              </a>
            </div>
          </div>

          <form
            className="col-12 col-md-5 shadow-lg contact--form-box"
            onSubmit={(e) => sendData(e)}
          >
            <div className="text-center p-2">
              <h2>Send me an email</h2>
            </div>
            <div className="row p-2">
              <input
                type="text"
                className="contact--form-input p-2"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="row p-2">
              <input
                type="mail"
                className="contact--form-input p-2"
                placeholder="example@addres.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="row p-2">
              <textarea
                className="contact--form-input p-2"
                placeholder="Message"
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
            </div>
            <div className="row mt-1 p-2 d-flex justify-content-center">
              {status.loading ? (
                <div className="contact--form-spinner p-2"></div>
              ) : (
                <button type="submit" className="contact--form-btn p-2 w-75">
                  Send <FiSend size={20} />
                </button>
              )}
              {status.code === 200 && (
                <div className="contact-success mt-3 p-2 text-center transition-opacity-effect">
                  {status.statusMsg}
                </div>
              )}
              {status.code === 400 && (
                <div className="contact-error mt-3 p-2 text-center transition-opacity-effect">
                  You must complete all fields
                </div>
              )}
              {status.code >= 500 && (
                <div className="contact-error mt-3 p-2 text-center transition-opacity-effect">
                  Something went wrong, try again
                </div>
              )}
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
                    <a href="tel:+393478238707">
                    <p>+393478238707</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
