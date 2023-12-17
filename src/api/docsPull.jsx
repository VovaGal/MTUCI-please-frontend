import axios from "axios";
import React, { useState, useEffect } from 'react';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;





const docInfo = () => {
  
  let result;
   axios.get("http://localhost:8000/first_level/persons").then( response => {
      result = response.data;
    }).catch(error => {
      console.error(error);
    })
  return result;
};

// export const docInfo = () => {
//   let result = null;
//     const response = axios.get("http://localhost:8000/first_level/persons");
//     result = response.data;
//     return result;
// };

export function saveDocs() {


  const [stuff, setStuff] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
  
    return JSON.parse(localValue)
  })


  useEffect(() => {
    if (localStorage.getItem == docInfo()) {
      localStorage.setItem("ITEMS", JSON.stringify(stuff))
      console.log("that")
    }
    else
    {
      docInfo((stuff) => setStuff(stuff));
      console.log("this")
    }
  }, []); 
  return stuff;
}

// useEffect(() => {
//   docInfo().then((stuff) => setStuff(stuff));
// }, []); 