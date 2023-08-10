import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import whatwedo_img from "../assets/img/png/WhatWeDo_img.png";

function WhatWeDo() {
  return (
    <>
      <section className=" py-5">
        <Container className=" container_custom">
          <Row className=" align-items-center justify-content-between">
            <Col lg={6}>
              <img className=" w-100" src={whatwedo_img} alt="whatwedo_img" />
            </Col>
            <Col lg={5}>
              <h2 className=" heading_common">
                What <span className="clr_orange"> we do</span>
              </h2>
              <p className=" paragraph_common text-white mb-0 ">
                1000 Cyber Drops will be dropping on Ethereum in March 2022.
                Each and every Cyber Drop is uniquely hand crafted. This is just
                the beginning of our journey. Owning a Cyber Drop will unlock
                monthly airdrops and future governance rights in addition to our
                revolutionary algorithm. We strive to always bring innovation
                and keep BUILDing. Cyber Drops is a community driven project and
                always will be that way. That’s our promise.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default WhatWeDo;
