import { useState, useEffect, useContext } from "react";
import React, { Component } from "react";
import "./lvl1.css";

import "./items/Pass.css";
import "./items/Passport.css";
import "./items/UniID.css";

import { useWindowSize } from "../../hooks/Resizer.jsx";
import { PassPresence, UniIDPresence, PassportPresence } from "../../funcs/Checks.jsx";
import { DataContext } from "../../funcs/DataContext.jsx";
import Buttons from "./items/Buttons.jsx";
import { PointContext } from "../../funcs/PointContext.jsx";

export default function Lvl1() {
  const { data, fetchData } = useContext(DataContext);
  const { points } = useContext(PointContext);

  useEffect(() => {
    console.log(data.error_code);
  });

  // const [width, height] = useWindowSize();
  // console.log("width", width);
  // console.log("height", height);

  return (
    <>
      <div className="game">
        <div className="header">
          {/* <div className="calendar"> 18.10.2023 </div> */}
          {/* <h1>{points}</h1> */}
        </div>

        <div className="gameArea">
          <div className="window">
            <div className="person" style={{ backgroundImage: `url('${data.photo}')`, backgroundSize: "cover" }}></div>
          </div>

          <form className="table">
            <div className="docs">
              <div className="ps">
                <PassPresence isPresent={data.pass} />
              </div>
              <div className="id">
                <UniIDPresence isPresent={data.student_id} />
              </div>
              <div className="psp">
                <PassportPresence isPresent={data.passport} />
              </div>
            </div>

            <div className="buttons">
              {/* <button className="btnY" onClick={handleApprove} type="button">
                Approve
              </button>
              <button className="btnN" onClick={handleDeny} type="button">
                Deny
              </button> */}
              <Buttons />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
