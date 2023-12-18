// TODO: гугли что такое formik
// TODO: вынести логику с беком(ручки) по модульной архитектуре
// TODO: прочитать что такое HOC и вынести туда логику авторизации
// TODO: гугли что такое layout и сделай его
// TODO: картинки в svg формате

import "./Home.css";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginModal } from "./LoginModalComponent.jsx";
import { checkAuth } from "../../api/user.jsx";
import { loggingOut } from "../../api/logout.jsx";
import { UserContext } from "../../funcs/userContext.jsx";
import { DataContext } from "../../funcs/DataContext.jsx";
import { PointContext } from "../../funcs/PointContext.jsx";
import "../Lvl1/lvl1.css";



function Home() {
  const { fetchData } = useContext(DataContext);
  const { points, setPoints } = useContext(PointContext);

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
    if (success) {
      alert("Successfully logged out");
      setUser(null);
    } else {
      alert("Logout failed");
    }
  };

  return (
    <UserContext.Provider value={{ setUser, setIsModalOpen }}>
      <div className="Home">
        {user ? (
          <div className="username-logout">
            <h2> Hello, {user.user.username}! </h2>
            <h2>
              {" "}
              You have {points} points in first lvl{" "}
            </h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : !isModalOpen && (
          <div className="login-btn">
            <button onClick={toggleModalStatus}> Login </button>
          </div>
        )}

        {isModalOpen && (
          <div className="modal-window">
            <LoginModal />
            <button className="modal-close-btn" onClick={toggleModalStatus}>
              Close
            </button>
          </div>
        )}

        <h1>Welcome to MTUCI PLEASE</h1>
        <button
          onClick={() =>
            user ? (fetchData(), navigate("/lvl1"), setPoints(0)) : setIsModalOpen(true)
          }
        >
          Level 1
        </button>
      </div>
    </UserContext.Provider>
  );
}

export default Home;
