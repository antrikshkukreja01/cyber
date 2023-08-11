import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import para_1 from "../assets/img/png/para_bg.png";

function Faq() {
  return (
    <>
      <section className=" py-5 position-relative">
        <span className=" position-absolute top-0 mt-5">
          <img className=" w-25" src={para_1} alt="para_1" />
        </span>
        <Container className=" container_custom">
          <div className=" text-center">
            <h2 className=" heading_common">
              <span className="clr_orange">FAQ</span>’s
            </h2>
          </div>
          <Row className=" align-items-center justify-content-center mt-5">
            <Col lg={10}>
              <Accordion defaultActiveKey={["0"]}>
                <Accordion.Item eventKey="0" className="mb-4">
                  <Accordion.Header>
                    <p className="mb-0 ff_lato text-white fw-normal fs_md ">
                      Egestas scelerisque duis quis aliquet. Consectetur?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 mx_635 ff_lato fw-normal fs_xsm text-white">
                      Viverra metus viverra rhoncus eget quam suspendisse diam
                      amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                      Quam quam egestas feugiat amet. Ut nibh vulputate.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mb-4">
                  <Accordion.Header>
                    <p className="mb-0 ff_lato text-white fw-normal fs_md">
                      Ac nec enim amet, leo lorem quis neque vitae aliquet?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 mx_635 ff_lato fw-normal fs_xsm text-white">
                      Viverra metus viverra rhoncus eget quam suspendisse diam
                      amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                      Quam quam egestas feugiat amet. Ut nibh vulputate.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mb-4">
                  <Accordion.Header>
                    <p className="mb-0 ff_lato text-white fw-normal fs_md">
                      Sit laoreet nibh sit hac potenti. Non ullamcorper fames
                      nibh donec?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 mx_635 ff_lato fw-normal fs_xsm text-white">
                      Viverra metus viverra rhoncus eget quam suspendisse diam
                      amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                      Quam quam egestas feugiat amet. Ut nibh vulputate.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="mb-4">
                  <Accordion.Header>
                    <p className="mb-0 ff_lato text-white fw-normal fs_md">
                      Porta amet tortor nec pulvinar urna. Et blandit sit id?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 mx_635 ff_lato fw-normal fs_xsm text-white">
                      Viverra metus viverra rhoncus eget quam suspendisse diam
                      amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                      Quam quam egestas feugiat amet. Ut nibh vulputate.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="mb-4">
                  <Accordion.Header>
                    <p className="mb-0 ff_lato text-white fw-normal fs_md">
                      Tellus hendrerit fermentum ut hendrerit ac vestibulum?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0 mx_635 ff_lato fw-normal fs_xsm text-white">
                      Viverra metus viverra rhoncus eget quam suspendisse diam
                      amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                      Quam quam egestas feugiat amet. Ut nibh vulputate.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Faq;
