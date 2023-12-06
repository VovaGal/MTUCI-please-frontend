// TODO: гугли что такое formik
// TODO: вынести логику с беком(ручки) по модульной архитектуре
// TODO: прочитать что такое HOC и вынести туда логику авторизации
// TODO: гугли что такое layout и сделай его
// TODO: картинки в svg формате

import { Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/register")}>Register</button>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/lvl1")}>Level 1</button>
    </>
  );
}

export default Home;
