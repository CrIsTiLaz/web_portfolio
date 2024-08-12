import "./qualification.css";
import "../../App.css";
import React, { useState } from "react";

const Qualification2 = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personnel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Science</h3>
                <span className="qualification__subtitle">
                  West University of Timisoara
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2020 - 2023</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Hight School</h3>
                <span className="qualification__subtitle">
                  Liceul Teoretic Recas
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2016 - 2020</i>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web developer</h3>
                <span className="qualification__subtitle">Self-Employed</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2023 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web developer</h3>
                <span className="qualification__subtitle">Infobest</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2022 - 2022</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification2;
