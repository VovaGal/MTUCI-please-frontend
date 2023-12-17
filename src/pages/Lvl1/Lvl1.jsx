import { useState, useEffect, useContext } from "react";
import React, { Component } from "react";
// import { approvedCall, deniedCall } from "../../funcs/Refresh.jsx";
import "./lvl1.css";

<<<<<<< HEAD
import './items/Pass.css';
import './items/Passport.css';
import './items/UniID.css';

import Pass from './items/Pass.jsx';
import Passport from './items/Passport.jsx';
import UniID from './items/UniID.jsx';
import { useWindowSize } from '../../hooks/Resizer.jsx';

import docInfo from '../../api/docsPull.jsx';
import { DataContext } from '../../funcs/DataContext.jsx';
=======
import "./items/Pass.css";
import "./items/Passport.css";
import "./items/UniID.css";

import Pass from "./items/Pass.jsx";
import Passport from "./items/Passport.jsx";
import UniID from "./items/UniID.jsx";
import { useWindowSize } from "../../hooks/Resizer.jsx";
// import { saveDocs } from "../../api/docsPull.jsx";
>>>>>>> 702e8518a7eb43e06cd126bb24810b15e3ab09b5

import { DataContext } from "../../funcs/DataContext.jsx";
import { docInfo } from "../../api/docsPull.jsx";

export default function Lvl1() {
  const { data, fetchData } = useContext(DataContext);

<<<<<<< HEAD
  const [buttonType, setType] = useState()
  const [data, setData] = useState([])
  const fetchData = async () => {
    const result = await docInfo();
    setData(result);
  }
    useEffect(() => {
    const fetchData = async () => {
      const result = await docInfo();
      setData(result);
      localStorage.setItem("ITEMS", JSON.stringify(result))
    };
    console.log("data is", data)
    fetchData();
  }, [buttonType]);

  const handleClick = () => {
    fetchData();
    setType(data.error_code)
    console.log(data.error_code)
  }

  const [width, height] = useWindowSize();
  console.log("width", width);
  console.log("height", height);
=======
  useEffect(() => {
    console.log("render");
  });

  const handleClick = () => {
    fetchData();
  };
>>>>>>> 702e8518a7eb43e06cd126bb24810b15e3ab09b5

  // const [width, height] = useWindowSize();
  // console.log("width", width);
  // console.log("height", height);

  const [points, setPoints] = useState(0);
  const handleCounter = () => {
    setPoints(points + 1);
  };

  return (
    <>
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
<<<<<<< HEAD
              <button className='btnN' onClick={() => setType('foo')} type="button"
              >Deny
=======
              <button className="btnN" type="button">
                Deny
>>>>>>> 702e8518a7eb43e06cd126bb24810b15e3ab09b5
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
