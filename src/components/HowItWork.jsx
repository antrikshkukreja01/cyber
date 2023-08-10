import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function HowItWork() {
  return (
    <>
      <section className=" py-5">
        <Container className=" container_custom">
          <div className="text-center">
            <h2 className=" heading_common">
              How it <span className="clr_orange">works</span>
            </h2>
          </div>
          <Row className=" align-items-center mt-lg-5">
            <Col sm={6} md={4} lg={3} className=" pe_custom_12 mt-4">
              <div className="card_box d-flex flex-column align-items-center ">
                <div className="text_circle d-flex align-items-center justify-content-center mb-4">
                  <p className=" mb-0 text-white ff_lato fw-bold fs_2x8l">01</p>
                </div>
                <p className=" ff_lato fw-bold fs_md mb-3 text-white ">
                  Mint NFT
                </p>
                <p className=" ff_lato fw-normal fs_xsm mb-0 text-white text-center ">
                  You must own our NFT to connect to direct management or
                  participate in governance
                </p>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className=" pe_custom_12 mt-4">
              <div className="card_box  d-flex flex-column align-items-center ">
                <div className="text_circle d-flex align-items-center justify-content-center mb-4">
                  <p className=" mb-0 text-white ff_lato fw-bold fs_2x8l">02</p>
                </div>
                <p className=" ff_lato fw-bold fs_md mb-3 text-white ">
                  Verify NFT Ownership
                </p>
                <p className=" ff_lato fw-normal fs_xsm mb-0 text-white text-center ">
                  Only Cyber Drops that are have verified are eligible to be
                  connected under direct management
                </p>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className=" pe_custom_12 mt-4">
              <div className="card_box d-flex flex-column align-items-center ">
                <div className="text_circle d-flex align-items-center justify-content-center mb-4">
                  <p className=" mb-0 text-white ff_lato fw-bold fs_2x8l">03</p>
                </div>
                <p className=" ff_lato fw-bold fs_md mb-3 text-white ">
                  Link API to your account
                </p>
                <p className=" ff_lato fw-normal fs_xsm mb-0 text-white text-center ">
                  Only HODLers that submit their API key and secret will be
                  under direct management
                </p>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="  mt-4">
              <div className="card_box d-flex flex-column align-items-center ">
                <div className="text_circle d-flex align-items-center justify-content-center mb-4">
                  <p className=" mb-0 text-white ff_lato fw-bold fs_2x8l">04</p>
                </div>
                <p className=" ff_lato fw-bold fs_md mb-3 text-white ">
                  Passive Income for life
                </p>
                <p className=" ff_lato fw-normal fs_xsm mb-0 text-white text-center ">
                  As long as your HODL your Cyber Drop, you will be connected
                  under direct management
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HowItWork;
