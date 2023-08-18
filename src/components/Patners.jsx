import React from "react";
import { Container } from "react-bootstrap";
import play_bit from "../assets/img/png/play_bit.png";
import capital_img from "../assets/img/png/24_img.png";
import trending_hive from "../assets/img/png/trading_hive.png";
import focus from "../assets/img/png/focus.png";

function Patners() {
  return (
    <>
      <section className="patners_bg position-relative text-center py-5 mt-lg-5">
        <Container>
          <div className=" text-center mb-4 mb-lg-0">
            <h2 className=" text_clr heading_common">
              Part<span className="clr_orange">ners</span>
            </h2>
          </div>
          <div className="d-flex align-items-center flex-column flex-lg-row justify-content-center partners_img_h pt-lg-5 ">
            <div className=" d-flex align-items-center">
              <div className="me-3">
                <img className=" w-100" src={play_bit} alt="play_bit" />
                <p className=" ff_lato fw-bold fs_sm text-center mb-0 mt-2 mt-lg-4">
                  Playbit
                </p>
              </div>
              <div className=" ms-3 mx-lg-3">
                <img className=" w-100" src={capital_img} alt="capital_img" />
                <p className=" ff_lato fw-bold fs_sm text-center mb-0 mt-2 mt-lg-4">
                  24 Capital
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-center mt-4 mt-lg-0">
              <div className=" me-3 mx-lg-3">
                <img
                  className=" w-100"
                  src={trending_hive}
                  alt="trending_hive"
                />
                <p className=" ff_lato fw-bold fs_sm text-center mb-0 mt-2 mt-lg-4">
                  TradingHive
                </p>
              </div>
              <div className="ms-3">
                <img className=" w-100" src={focus} alt="focus" />
                <p className=" ff_lato fw-bold fs_sm text-center mb-0 mt-2 mt-lg-4">
                  Focus Group Equities
                </p>
              </div>
            </div>
          </div>
          <div className=" text-center pe-lg-5 mt-4 mt-lg-0">
            <p className=" mb-0 clr_orange ff_lato fw-bold fs_sm">
              For business and collaborations, contact us
              team@cyberdrops.finance
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Patners;
