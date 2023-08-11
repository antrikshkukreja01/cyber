import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import our_1 from "../assets/img/png/our_1.png";
import our_2 from "../assets/img/png/our_2.png";
import our_3 from "../assets/img/png/our_3.png";

function OurAglo() {
  return (
    <>
      <section className=" py-5">
        <Container className=" container_custom">
          <Row className=" align-items-center justify-content-between">
            <Col lg={6} xl={5}>
              <h2 className=" heading_common">
                Our <span className="clr_orange">Algo</span>
              </h2>
              <p className=" paragraph_common text-white mb-0 mt-3">
                We have perfected our algorithm, which prioritizes a low risk
                and consistent profit stream without the need for daily
                micromanagement. While most trading algorithms can’t stand up
                against a volatile or risky market, our algorithm thrives in
                those conditions. Early-stage testers have seen a consistent
                flow of income with minimal ups and downs. Our algorithm has
                been in the works for YEARS. This has given us the time to
                rigorously backtest and release any needed hotfixes. As of early
                March 2022, we have close to a quarter of a million under direct
                management!
              </p>
            </Col>
            <Col lg={6}>
              <Row
                className=" align-items-center mt-4 mt-lg-0 justify-content-lg-between justify-content-xl-end
              "
              >
                <Col className=" me-3" sm={4}>
                  <div className="our_linear card_width">
                    <img className=" w-100" src={our_1} alt="our_1" />
                  </div>
                  <div className="our_linear card_width mt-3">
                    <img className=" w-100" src={our_2} alt="our_2" />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="our_linear mt-3 mt-lg-0">
                    <img className=" w-100" src={our_3} alt="our_3" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OurAglo;
