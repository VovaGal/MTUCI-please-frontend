import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Lvl1 = lazy(() => import("./pages/Lvl1/Lvl1.jsx"));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Suspense fallback="Loading..."><Home/></Suspense>}/>
        <Route
          path="/lvl1"
          element={<Suspense fallback="Loading..."><Lvl1/></Suspense>}/>
      </Routes>
    </Router>
  );
}


export default App;
