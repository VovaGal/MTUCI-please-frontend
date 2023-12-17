// TODO: гугли что такое formik
// TODO: вынести логику с беком(ручки) по модульной архитектуре
// TODO: прочитать что такое HOC и вынести туда логику авторизации
// TODO: гугли что такое layout и сделай его
// TODO: картинки в svg формате

import "./Home.css";
import React, { useEffect, useState, createContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { LoginModal } from "./LoginModal.jsx";
import { checkAuth } from "../../api/user.jsx";
import { loggingOut } from "../../api/logout.jsx";


export const UserContext = createContext();

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalStatus = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    checkAuth().then((user) => setUser(user));
  }, []);

  const handleLogout = async () => {
    const success = await loggingOut();
    setUser(null);
    if (success) {
        alert('Successfully logged out');
        // setUser(null);
    }
    // else {
    //     alert('Logout failed');
    // }
};

  return (
    <UserContext.Provider value={{ setUser, setIsModalOpen }}>
      {user ? (
        <div className="usename-logout">
          <h1> {user.user.username} </h1>
          <h3> {user.user.first_level_score} points in first lvl</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <button onClick={toggleModalStatus}> Login </button>
        </>
      )}
      <button onClick={() => user ? navigate("/lvl1") : setIsModalOpen(true)}>Level 1</button>
      {isModalOpen && (
        <div className="modal-window">
          <LoginModal />
          <button className="modal-close-btn" onClick={toggleModalStatus}>
            Close Modal
          </button>
        </div>
      )}
    </UserContext.Provider>
  );
}

export default Home;
