import React from "react";
import "./skills.css";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend technologies</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i
              class="bx bx-badge-check"
              style={{ fontSize: "1.5rem", color: "var(--title-color)" }}
            ></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>

          <div className="skills__data">
            <i
              class="bx bx-badge-check"
              style={{ fontSize: "1.5rem", color: "var(--title-color)" }}
            ></i>{" "}
            <div>
              <h3 className="skills__name">GIT</h3>
            </div>
          </div>

          <div className="skills__data">
            <i
              class="bx bx-badge-check"
              style={{ fontSize: "1.5rem", color: "var(--title-color)" }}
            ></i>{" "}
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>

          <div className="skills__data">
            <i
              class="bx bx-badge-check"
              style={{ fontSize: "1.5rem", color: "var(--title-color)" }}
            ></i>{" "}
            <div>
              <h3 className="skills__name">Next js</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
