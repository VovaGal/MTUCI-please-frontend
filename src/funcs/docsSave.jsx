import React, { useState, useEffect } from 'react';
import { docInfo } from "../api/docsPull.jsx";

export function saveDocs() {

  // const [stuff, setStuff] = useState(() => {
  //     const localValue = localStorage.getItem("ITEMS")
  //     if (localValue == null) return []

  //     return JSON.parse(localValue)
  //   })

  //   useEffect(() => {
  //     localStorage.setItem("ITEMS", JSON.stringify(stuff))
  //   }, [stuff])

  const [stuff, setStuff] = useState([])
  useEffect(() => {
    docInfo().then((stuff) => setStuff(stuff));
  }, []); 
  return stuff;
}


