import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/png/hero_img.png";
import opensea from "../assets/img/png/opensea.png";
import discord from "../assets/img/png/discord.png";
import twiter from "../assets/img/png/twiter.png";
import medium from "../assets/img/png/medium_circle.png";

function Footer() {
  return (
    <>
      <section className=" pt-5">
        <Container className=" container_custom">
          <Row className=" justify-content-center mb-4">
            <Col lg={5}>
              <div className=" text-center">
                <img className=" footer_logo_size" src={logo} alt="logo" />
                <h2 className=" my-3 ff_lato fw-bold fs_3x6l clr_orange">
                  Cyber Drops
                </h2>
                <p className=" mb-0 ff_lato fw-normal fs_sm text-white">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet.
                </p>
                <div className=" d-flex align-items-center justify-content-center gap-2 mt-3">
                  <a
                    href="#"
                    className="border_circle icon_hover d-flex justify-content-center  align-items-center"
                  >
                    <img
                      className="icon_size icon "
                      src={opensea}
                      alt="opensea"
                    />
                  </a>
                  <a
                    href="#"
                    className="border_circle icon_hover d-flex justify-content-center  align-items-center"
                  >
                    <img
                      className="icon_size icon"
                      src={discord}
                      alt="opensea"
                    />
                  </a>
                  <a
                    href="#"
                    className="border_circle icon_hover d-flex justify-content-center  align-items-center"
                  >
                    <img
                      className="icon_size icon"
                      src={twiter}
                      alt="opensea"
                    />
                  </a>
                  <a
                    href="#"
                    className="border_circle icon_hover d-flex justify-content-center  align-items-center"
                  >
                    <img
                      className="icon_size icon"
                      src={medium}
                      alt="opensea"
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="border_top d-flex justify-content-center align-items-center py-3">
          <p className=" mb-0 ff_lato fw-normal fs_xsm text-white opacity-50">
            Copyright By 2022
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
