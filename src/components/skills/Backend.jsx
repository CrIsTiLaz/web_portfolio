import React from "react";
import "./skills.css";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend technologies</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i
              class="bx bx-badge-check"
              style={{ fontSize: "1.5rem", color: "var(--title-color)" }}
            ></i>{" "}
            <div>
              <h3 className="skills__name">C# and .Net</h3>
            </div>
          </div>

          <div className="skills__data">
            <i
              class="bx bx-badge-check"
              style={{ fontSize: "1.5rem", color: "var(--title-color)" }}
            ></i>{" "}
            <div>
              <h3 className="skills__name">Java</h3>
            </div>
          </div>

          <div className="skills__data">
            <i
              class="bx bx-badge-check"
              style={{ fontSize: "1.5rem", color: "var(--title-color)" }}
            ></i>{" "}
            <div>
              <h3 className="skills__name">Sql & NoSql</h3>
            </div>
          </div>

          <div className="skills__data">
            <i
              class="bx bx-badge-check"
              style={{ fontSize: "1.5rem", color: "var(--title-color)" }}
            ></i>{" "}
            <div>
              <h3 className="skills__name">Node & Express</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
