import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import varun from "../assets/img/png/varun_team.png";
import shubh from "../assets/img/png/shubh_team.png";
import discord from "../assets/img/png/discord_team.png";
import twiter from "../assets/img/png/twiter_team.png";
import medium from "../assets/img/png/medium_team.png";
import { Col, Container, Row } from "react-bootstrap";

export default () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center">
          <h2 className=" heading_common">
            Meet the <span className="clr_orange">Team</span>
          </h2>
        </div>
        <Splide
          className=" mt-5"
          options={{
            pagination: true,
            autoScroll: {
              speed: 1,
              pauseOnHover: true,
            },
            perPage: 2,
            gap: "3rem",
            breakpoints: {
              1200: {
                perPage: 2,
                gap: "1rem",
                type: "loop",
                pauseOnHover: false,
              },
              992: {
                perPage: 1,
                gap: "1rem",
              },
              768: {
                perPage: 1,
                arrows: false,
                gap: "1rem",
              },
              500: {
                arrows: false,
                perPage: 1,
                gap: "1rem",
              },
            },
          }}
          //   extensions={{ AutoScroll }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div className="team_card text-center ">
              <Row className=" align-items-center">
                <Col sm={6}>
                  <img className=" w-100 h_img_team" src={varun} alt="varun" />
                </Col>
                <Col className="py-4 py-sm-0" sm={6}>
                  <h2 className=" ff_lato fw-bold fs_2x4l text-black mb-2">
                    Varun Muthu
                  </h2>
                  <p className=" fs_sm ff_lato fw-bold text-black mb-0">
                    Marketing Director
                  </p>
                  <span className=" d-flex justify-content-center mt-4">
                    <p className=" fs_xsm ff_lato fw-normal text-black mx_193">
                      {" "}
                      https://www.linkedin.com/
                      <br />
                      in/varunmuthu1
                    </p>
                  </span>
                  <div className=" d-flex align-items-center gap-2 justify-content-center">
                    <img
                      className=" icon_size_team"
                      src={discord}
                      alt="discord"
                    />
                    <img
                      className=" icon_size_team"
                      src={twiter}
                      alt="twiter"
                    />
                    <img
                      className=" icon_size_team"
                      src={medium}
                      alt="medium"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="team_card text-center ">
              <Row className=" align-items-center">
                <Col sm={6}>
                  <img className=" w-100 h_img_team" src={shubh} alt="shubh" />
                </Col>
                <Col className="py-4 py-sm-0" sm={6}>
                  <h2 className=" ff_lato fw-bold fs_2x4l text-black mb-2">
                    Shubh Sharma
                  </h2>
                  <p className=" fs_sm ff_lato fw-bold text-black mb-0">
                    Operations Director
                  </p>
                  <span className=" d-flex justify-content-center mt-4">
                    <p className=" fs_xsm ff_lato fw-normal text-black mx_193">
                      {" "}
                      https://www.linkedin.com/
                      <br />
                      in/varunmuthu1
                    </p>
                  </span>
                  <div className=" d-flex align-items-center gap-2 justify-content-center">
                    <img
                      className=" icon_size_team"
                      src={discord}
                      alt="discord"
                    />
                    <img
                      className=" icon_size_team"
                      src={twiter}
                      alt="twiter"
                    />
                    <img
                      className=" icon_size_team"
                      src={medium}
                      alt="medium"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="team_card text-center ">
              <Row className=" align-items-center">
                <Col sm={6}>
                  <img className=" w-100 h_img_team" src={varun} alt="varun" />
                </Col>
                <Col className="py-4 py-sm-0" sm={6}>
                  <h2 className=" ff_lato fw-bold fs_2x4l text-black mb-2">
                    Varun Muthu
                  </h2>
                  <p className=" fs_sm ff_lato fw-bold text-black mb-0">
                    Marketing Director
                  </p>
                  <span className=" d-flex justify-content-center mt-4">
                    <p className=" fs_xsm ff_lato fw-normal text-black mx_193">
                      {" "}
                      https://www.linkedin.com/
                      <br />
                      in/varunmuthu1
                    </p>
                  </span>
                  <div className=" d-flex align-items-center gap-2 justify-content-center">
                    <img
                      className=" icon_size_team"
                      src={discord}
                      alt="discord"
                    />
                    <img
                      className=" icon_size_team"
                      src={twiter}
                      alt="twiter"
                    />
                    <img
                      className=" icon_size_team"
                      src={medium}
                      alt="medium"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="team_card text-center ">
              <Row className=" align-items-center">
                <Col sm={6}>
                  <img className=" w-100 h_img_team" src={shubh} alt="shubh" />
                </Col>
                <Col className="py-4 py-sm-0" sm={6}>
                  <h2 className=" ff_lato fw-bold fs_2x4l text-black mb-2">
                    Shubh Sharma
                  </h2>
                  <p className=" fs_sm ff_lato fw-bold text-black mb-0">
                    Operations Director
                  </p>
                  <span className=" d-flex justify-content-center mt-4">
                    <p className=" fs_xsm ff_lato fw-normal text-black mx_193">
                      {" "}
                      https://www.linkedin.com/
                      <br />
                      in/varunmuthu1
                    </p>
                  </span>
                  <div className=" d-flex align-items-center gap-2 justify-content-center">
                    <img
                      className=" icon_size_team"
                      src={discord}
                      alt="discord"
                    />
                    <img
                      className=" icon_size_team"
                      src={twiter}
                      alt="twiter"
                    />
                    <img
                      className=" icon_size_team"
                      src={medium}
                      alt="medium"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="team_card text-center ">
              <Row className=" align-items-center">
                <Col sm={6}>
                  <img className=" w-100 h_img_team" src={varun} alt="varun" />
                </Col>
                <Col className="py-4 py-sm-0" sm={6}>
                  <h2 className=" ff_lato fw-bold fs_2x4l text-black mb-2">
                    Varun Muthu
                  </h2>
                  <p className=" fs_sm ff_lato fw-bold text-black mb-0">
                    Marketing Director
                  </p>
                  <span className=" d-flex justify-content-center mt-4">
                    <p className=" fs_xsm ff_lato fw-normal text-black mx_193">
                      {" "}
                      https://www.linkedin.com/
                      <br />
                      in/varunmuthu1
                    </p>
                  </span>
                  <div className=" d-flex align-items-center gap-2 justify-content-center">
                    <img
                      className=" icon_size_team"
                      src={discord}
                      alt="discord"
                    />
                    <img
                      className=" icon_size_team"
                      src={twiter}
                      alt="twiter"
                    />
                    <img
                      className=" icon_size_team"
                      src={medium}
                      alt="medium"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="team_card text-center ">
              <Row className=" align-items-center">
                <Col sm={6}>
                  <img className=" w-100 h_img_team" src={shubh} alt="shubh" />
                </Col>
                <Col className="py-4 py-sm-0" sm={6}>
                  <h2 className=" ff_lato fw-bold fs_2x4l text-black mb-2">
                    Shubh Sharma
                  </h2>
                  <p className=" fs_sm ff_lato fw-bold text-black mb-0">
                    Operations Director
                  </p>
                  <span className=" d-flex justify-content-center mt-4">
                    <p className=" fs_xsm ff_lato fw-normal text-black mx_193">
                      {" "}
                      https://www.linkedin.com/
                      <br />
                      in/varunmuthu1
                    </p>
                  </span>
                  <div className=" d-flex align-items-center gap-2 justify-content-center">
                    <img
                      className=" icon_size_team"
                      src={discord}
                      alt="discord"
                    />
                    <img
                      className=" icon_size_team"
                      src={twiter}
                      alt="twiter"
                    />
                    <img
                      className=" icon_size_team"
                      src={medium}
                      alt="medium"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </SplideSlide>
        </Splide>
      </Container>
    </section>
  );
};
