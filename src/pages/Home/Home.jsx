// TODO: гугли что такое formik
// TODO: вынести логику с беком(ручки) по модульной архитектуре
// TODO: прочитать что такое HOC и вынести туда логику авторизации
// TODO: гугли что такое layout и сделай его
// TODO: картинки в svg формате


// import "./Home.css";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { LoginModal } from "./LoginModal.jsx";

function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <>
      <button onClick={() => navigate("/lvl1")}>Level 1</button>
      <button className="modal-open-btn" onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <div className="modal-window">
          <LoginModal/>
          <button className="modal-close-btn" onClick={toggleModal}>Close Modal</button>
        </div>
      )}

    </>
  );
}

export default Home;
