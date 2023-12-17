import { useState, useEffect, useContext } from "react";
import React, { Component } from "react";
// import { approvedCall, deniedCall } from "../../funcs/Refresh.jsx";
import "./lvl1.css";

import "./items/Pass.css";
import "./items/Passport.css";
import "./items/UniID.css";

import { useWindowSize } from "../../hooks/Resizer.jsx";
import { PassPresence, UniIDPresence, PassportPresence } from "../../funcs/Checks.jsx";
import { DataContext } from "../../funcs/DataContext.jsx";

export default function Lvl1() {
  const { data, fetchData } = useContext(DataContext);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    console.log("render");
  });

  const handleClick = () => {
    if ( data.error_code == 0 ||  data.error_code == 1 ||  data.error_code == 2 ) {
      setPoints(points + 1);
    }
    fetchData();
  };

  // const [width, height] = useWindowSize();
  // console.log("width", width);
  // console.log("height", height);

  return (
    <>
      <div className="game">
        <div className="header">
          <div className="calendar"> 18.10.2023 </div>
          <p>{points}</p>
        </div>

        <div className="gameArea">
          <div className="window">
            <div className="person"></div>
          </div>

          <form className="table">
            <div className="docs">
              <div className="ps">
                <PassPresence isPresent={data.pass} />
              </div>
              <div className="id">
              <UniIDPresence isPresent={data.studetn_id} />
              </div>
              <div className="psp">
              <PassportPresence isPresent={data.passport} />
              </div>
            </div>

            <div className="buttons">
              <button className="btnY" onClick={handleClick} type="button">
                Approve
              </button>
              <button className="btnN" type="button">
                Deny
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
