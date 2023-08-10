import React, { useState } from "react";
import logo from "../assets/img/png/logo.png";
import { Container } from "react-bootstrap";
import cancle from "../assets/img/png/cancle_icon.png";
import opensea from "../assets/img/png/opensea.png";
import discord from "../assets/img/png/discord.png";
import twiter from "../assets/img/png/twiter.png";
import medium from "../assets/img/png/medium_circle.png";

function Nav() {
  const [name, setname] = useState(false);
  if (name) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <nav>
        <Container className="container_custom">
          <div className="d-flex align-items-center justify-content-between  d-lg-flex d-none w-100">
            <article className=" d-flex align-items-center gap-3 gap-lg-4 zn_1 gap-xl-5">
              <a href="#">
                <img className=" logo_size" src={logo} alt="logo" />
              </a>
            </article>
            <article className=" d-flex align-items-center gap-4">
              <a
                className="text-decoration-none  ff_lato fw-normal nav_hover text-white"
                href="#Home"
              >
                Home
              </a>
              <a
                className="text-decoration-none ff_lato fw-normal nav_hover text-white"
                href="#Services"
              >
                About
              </a>
              <a
                className="text-decoration-none ff_lato fw-normal nav_hover text-white"
                href="#Project"
              >
                Team
              </a>
              <a
                className="text-decoration-none ff_lato fw-normal nav_hover text-white"
                href="#About"
              >
                Roadmap
              </a>
              <a
                className="text-decoration-none ff_lato fw-normal nav_hover text-white"
                href="#About"
              >
                Partners
              </a>
              <div className=" d-flex align-items-center gap-2">
                <a
                  href="#"
                  className="border_circle icon_hover d-flex justify-content-center  align-items-center"
                >
                  <img className="icon_size  " src={opensea} alt="opensea" />
                </a>
                <a
                  href="#"
                  className="border_circle icon_hover d-flex justify-content-center  align-items-center"
                >
                  <img className="icon_size " src={discord} alt="opensea" />
                </a>
                <a
                  href="#"
                  className="border_circle icon_hover d-flex justify-content-center  align-items-center"
                >
                  <img className="icon_size " src={twiter} alt="opensea" />
                </a>
                <a
                  href="#"
                  className="border_circle icon_hover d-flex justify-content-center  align-items-center"
                >
                  <img className="icon_size " src={medium} alt="opensea" />
                </a>
              </div>
              <button
                className="text-decoration-none  main_btn btn_style_1  "
                href="#"
              >
                Connect Wallet
              </button>
            </article>
          </div>
          <article className="d-flex justify-content-between w-100  ">
            <a
              className="text-decoration-none  d-lg-none d-flex mt-2 align-items-center  "
              href="#"
            >
              <article className=" zn_1 d-flex align-items-center ">
                <a href="#">
                  <img className=" logo_size" src={logo} alt="logo" />
                </a>
              </article>
            </a>
            <a
              href="#"
              className="d-lg-none d-flex mt-1 justify-content-end zn_3 align-items-center  d-inline-block  ms-2  ps-3 "
              onClick={() => setname(true)}
            >
              <label className="navBtn " htmlFor="line">
                <input type="checkbox" id="line" className="menubar" />
                <span className="span1 rounded-3"></span>
                <span className="span2 rounded-3"></span>
                <span className="span3 rounded-3"></span>
              </label>
            </a>
          </article>
          <div className={`${name ? "box_my" : " box_hide  "}`}>
            <div className="d-flex align-items-center justify-content-between px-2 position-absolute top-0 w-100 ">
              <a
                className="text-decoration-none d-flex align-items-center  "
                href="#"
              >
                <article className=" zn_1 d-flex mt-2 align-items-center ">
                  <a href="#">
                    <img className=" logo_size" src={logo} alt="logo" />
                  </a>
                </article>
              </a>
              <a
                href="#"
                className="d-lg-none zn d-flex  justify-content-center align-items-center  d-inline-block"
                onClick={() => setname(false)}
              >
                <img className=" cancle_icon_size " src={cancle} alt="cancle" />
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-between flex-column gap-4  d-lg-none">
              <article className=" flex-column d-flex text-center gap-3">
                <a
                  className="text-decoration-none  ff_lato fw-normal nav_hover text-white"
                  href="#Home"
                  onClick={() => setname(false)}
                >
                  Home
                </a>
                <a
                  className="text-decoration-none ff_lato fw-normal nav_hover text-white"
                  href="#Services"
                  onClick={() => setname(false)}
                >
                  About
                </a>
                <a
                  className="text-decoration-none  ff_lato fw-normal nav_hover text-white"
                  href="#Project"
                  onClick={() => setname(false)}
                >
                  Team
                </a>
                <a
                  className="text-decoration-none  ff_lato fw-normal nav_hove text-white"
                  href="#About"
                  onClick={() => setname(false)}
                >
                  Roadmap
                </a>
                <a
                  className="text-decoration-none  ff_lato fw-normal nav_hove text-white"
                  href="#About"
                  onClick={() => setname(false)}
                >
                  Partners
                </a>
                <div className=" d-flex align-items-center gap-2">
                  <a
                    href="#"
                    className="border_circle icon_hover d-flex justify-content-center  align-items-center"
                  >
                    <img className="icon_size  " src={opensea} alt="opensea" />
                  </a>
                  <a
                    href="#"
                    className="border_circle icon_hover d-flex justify-content-center  align-items-center"
                  >
                    <img className="icon_size " src={discord} alt="opensea" />
                  </a>
                  <a
                    href="#"
                    className="border_circle icon_hover d-flex justify-content-center  align-items-center"
                  >
                    <img className="icon_size " src={twiter} alt="opensea" />
                  </a>
                  <a
                    href="#"
                    className="border_circle icon_hover d-flex justify-content-center  align-items-center"
                  >
                    <img className="icon_size " src={medium} alt="opensea" />
                  </a>
                </div>
                <button
                  className="text-decoration-none main_btn btn_style_1     "
                  onClick={() => setname(false)}
                >
                  Connect Wallet
                </button>
              </article>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Nav;
