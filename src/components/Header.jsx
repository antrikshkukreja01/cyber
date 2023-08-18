import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hero_img from "../assets/img/webp4/hero_img.webp";

function Header() {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row className=" align-items-center justify-content-between">
            <Col lg={5}>
              <h1 className=" ff_lato fw_800 fs_7x2l text-white">
                Welcome to <span className=" clr_orange">Cyber Drops</span>
              </h1>
              <p className="paragraph_common text-white mb-3 mt-2 mb-md-5 mt-md-4">
                Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
                tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit
                nec curabitur purus. Ullamcorper mattis risus suspendisse
                pretium tristique.
              </p>
              <button className="text-decoration-none main_btn btn_style_2">
                Explore Now
              </button>
            </Col>
            <Col className=" mt-4" lg={6}>
              <div className=" d-flex justify-content-center w-100">
                <img className=" w-75" src={hero_img} alt="hero_img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Header;
