import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import { DataContext } from "./funcs/DataContext.jsx";
import { PointContext } from "./funcs/PointContext.jsx";
import { docInfo } from "./api/docsPull.jsx";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Lvl1 = lazy(() => import("./pages/Lvl1/Lvl1.jsx"));

function App() {

  const [data, setData] = useState(null);
  const fetchData = async () => {
    const result = await docInfo();
    setData(result);
    localStorage.setItem("myData", JSON.stringify(result));
  };

  useEffect(() => {
    const loadedData = localStorage.getItem("myData");
    if (loadedData) {
      setData(JSON.parse(loadedData));
    } else {
      fetchData();
    }
  }, []);

  const [points, setPoints] = useState(() => {
    const localPoints = localStorage.getItem("POINTS");
    if (localPoints == null) return (0)
    return JSON.parse(localPoints)
  });
  useEffect(() => {
    localStorage.setItem("POINTS", JSON.stringify(points))
    console.log(points)
  }, [points])

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      <PointContext.Provider value={{ points, setPoints }}>
        <Router>
          <Routes>
            <Route path="/" element={<Suspense fallback="Loading..."><Home /></Suspense>} />
            <Route path="/lvl1" element={<Suspense fallback="Loading..."><Lvl1 /></Suspense>} />
          </Routes>
        </Router>
      </PointContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
