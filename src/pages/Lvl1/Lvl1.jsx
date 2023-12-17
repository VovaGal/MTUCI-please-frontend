import { useState, useEffect } from "react";
import React, { Component } from "react";
// import { approvedCall, deniedCall } from "../../funcs/Refresh.jsx";
import "./lvl1.css";

import "./items/Pass.css";
import "./items/Passport.css";
import "./items/UniID.css";

import {Pass} from "./items/Pass.jsx";
import Passport from "./items/Passport.jsx";
import UniID from "./items/UniID.jsx";
import { useWindowSize } from "../../hooks/Resizer.jsx";
import { docInfo } from "../../api/docsPull.jsx";
// import { saveDocs } from "../../api/docsPull.jsx";
import { dataContext } from "../../funcs/dataContext.jsx";

export default function Lvl1() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await docInfo();
      setData(result);
    };
    console.log("data is")
    console.log(data)
    fetchData();
  }, []);

  useEffect(() => {
    console.log("render");
  });

  const handleClick = () => {
    // saveDocs();
    const fetchData = async () => {
      const result = await docInfo();
      setData(result);
    };
    console.log("data is")
    console.log(data)
    fetchData();
  };

  const [width, height] = useWindowSize();
  console.log("width", width);
  console.log("height", height);

  const [points, setPoints] = useState(0);
  const handleCounter = () => {
    setPoints(points + 1);
  };

  return (
    <dataContext.Provider value={{ data }}>
      <div className="game">
        <div className="header">
          <h1>{data.surname}</h1>
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
                <Pass />
              </div>
              <div className="id">
                <UniID />
              </div>
              <div className="psp">
                <Passport />
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
    </dataContext.Provider>
  );
}
