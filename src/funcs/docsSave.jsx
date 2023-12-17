import React, { useState, useEffect } from 'react';
import { docInfo } from "../api/docsPull.jsx";

export function saveDocs() {
  const [stuff, setStuff] = useState([])
  useEffect(() => {
    docInfo().then((stuff) => setStuff(stuff));
  }, []); 
  return stuff;
}


