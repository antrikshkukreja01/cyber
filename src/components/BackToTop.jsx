import React, { useState, useEffect } from "react";
import backtop_btn from "../assets/img/png/backtotop.png";

const Backtotop = () => {
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div className="me-2a">
      <span
        id="btn"
        onClick={() => top()}
        style={{ zIndex: "99" }}
        className={
          backToTop
            ? "btn d-block position-fixed end-0 bottom-0 mb-3 me-2 bg_gradient_btn p-0 py-3 px-1 rounded-5"
            : "btn d-none position-fixed end-0 bottom-0 mb-2 me-2 bg_gradient_btn"
        }
      >
        {" "}
        <img className=" back_top w_50" src={backtop_btn} alt="backtop_btn" />
      </span>
    </div>
  );
};

export default Backtotop;
