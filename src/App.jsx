import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import { DataContext } from "./funcs/DataContext.jsx";
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

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      <Router>
        <Routes>
          <Route path="/"element={<Suspense fallback="Loading..."><Home /></Suspense>}/>
          <Route path="/lvl1"element={<Suspense fallback="Loading..."><Lvl1 /></Suspense>}/>
        </Routes>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
