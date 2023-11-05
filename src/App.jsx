import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Aaa from "./pages/Aaa";
import Lvl1 from "./pages/Lvl1";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" elements={<NavWrapper />}>
      <Route path="/" element={<Home />} />
      <Route path="/Aaa" element={<Aaa />} />
      <Route path="/lvl1" element={<Lvl1 />} />
      </Route>
    </Routes>
    </Router>
  )
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/Aaa">Aaa</Link>
      </nav>
      <Outlet />
    </>
  )
}


export default App