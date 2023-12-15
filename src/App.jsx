import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Aaa = lazy(() => import("./pages/Aaa.jsx"));
const Lvl1 = lazy(() => import("./pages/Lvl1/Lvl1.jsx"));
const Register = lazy(() => import("./pages/Home/Register.jsx"));
const Login = lazy(() => import("./pages/Home/Login.jsx"));

// import axios from "axios";
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" elements={<NavWrapper />}>
          <Route
            path="/"
            element={
              <Suspense fallback="Loading...">
                <Home />
              </Suspense>
            }
          />
          <Route path="/Aaa" element={<Aaa />} />
          <Route
            path="/lvl1"
            element={
              <Suspense fallback="Loading...">
                <Lvl1 />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback="Loading...">
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback="Loading...">
                <Login />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/Aaa">Aaa</Link>
      </nav>
    </>
  );
}

export default App;
