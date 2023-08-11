import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import card from "../assets/img/png/card_1.png";
import card_2 from "../assets/img/png/card_2.png";

function OurMissions() {
  window.onload = () => {
    let sliderImagesBox = document.querySelectorAll(".cards-box");
    sliderImagesBox.forEach((el) => {
      let imageNodes = el.querySelectorAll(".card:not(.hide)");
      let arrIndexes = []; // Index array
      (() => {
        // The loop that added values to the arrIndexes array for the first time
        let start = 0;
        while (imageNodes.length > start) {
          arrIndexes.push(start++);
        }
      })();

      let setIndex = (arr) => {
        for (let i = 0; i < imageNodes.length; i++) {
          imageNodes[i].dataset.slide = arr[i]; // Set indexes
        }
      };
      el.addEventListener("click", () => {
        arrIndexes.unshift(arrIndexes.pop());
        setIndex(arrIndexes);
      });
      setIndex(arrIndexes); // The first indexes addition
    });
  };
  return (
    <>
      <section className=" py-5 position-relative">
        <span className=" shadow_white position-absolute top-0 end-0"></span>
        <span className=" shadow_white position-absolute top-0 start-0"></span>
        <Container className="container_custom">
          <Row className="align-items-center justify-content-between">
            <Col lg={5} className="mb-5 mb-lg-0 ps-sm-5 ps-xl-0 ">
              <div class="cards-box w_70 ">
                <div class="card hide">
                  <div class="content-placeholder">
                    <img className="w-100" src={card_2} alt="card" />
                  </div>
                </div>
                <div class="card">
                  <div class="content-placeholder">
                    <img className="w-100" src={card} alt="card" />
                  </div>
                </div>
                <div class="card">
                  <div class="content-placeholder">
                    <img className="w-100" src={card_2} alt="card" />
                  </div>
                </div>
                <div class="card">
                  <div class="content-placeholder">
                    <img className="w-100" src={card} alt="card" />
                  </div>
                </div>
                <div class="card">
                  <div class="content-placeholder">
                    <img className="w-100" src={card_2} alt="card" />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <h2 className=" heading_common">
                Our <span className="clr_orange">Mission</span>
              </h2>
              <p className=" paragraph_common text-white mb-5 mt-3">
                We understand that one of the biggest concerns for early-stage
                investors is that it can quickly become stressful, overwhelming,
                and especially extremely time consuming. It isn’t easy to
                balance a full time job, family, and an active investment
                portfolio, especially when just starting out.
              </p>
              <button className="text-decoration-none main_btn btn_style_2     ">
                Read More
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OurMissions;
