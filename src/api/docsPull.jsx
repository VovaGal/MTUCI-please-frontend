<<<<<<< HEAD
import axios from "axios";
import React, { useState, useEffect } from 'react';


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
=======
import axios from "./axiosConfig";
import { useState, useEffect } from 'react';
>>>>>>> 702e8518a7eb43e06cd126bb24810b15e3ab09b5


// const docInfo = () => {

//   let result;
//    axios.get("http://localhost:8000/first_level/persons").then( response => {
//       result = response.data;
//     }).catch(error => {
//       console.error(error);
//     })
//   return result;
// };

<<<<<<< HEAD

const docInfo = async () => {
  
  let result;
  try {
    const response = await axios.get("http://localhost:8000/first_level/persons");
    result = response.data;
=======
export const docInfo = async () => {
  let result = [];
  try {
    const response = await axios.get("http://localhost:8000/first_level/persons");
    result = response.data;
    console.log("API response:", result); // log the API response
>>>>>>> 702e8518a7eb43e06cd126bb24810b15e3ab09b5
  } catch (error) {
    console.error(error);
  }
  return result;
};

<<<<<<< HEAD
export default docInfo;
=======
// export const docInfo = () => {
//   let result = null;
//     const response = axios.get("http://localhost:8000/first_level/persons");
//     result = response.data;
//     return result;
// };

// export function saveDocs() {


//   const [stuff, setStuff] = useState(() => {
//     const localValue = localStorage.getItem("ITEMS")
//     if (localValue == null) return []

//     return JSON.parse(localValue)
//   })


//   useEffect(() => {
//     if (localStorage.getItem == docInfo()) {
//       localStorage.setItem("ITEMS", JSON.stringify(stuff))
//       console.log("that")
//     }
//     else
//     {
//       docInfo((stuff) => setStuff(stuff));
//       console.log("this")
//     }
//   }, []);
//   return stuff;
// }

// useEffect(() => {
//   docInfo().then((stuff) => setStuff(stuff));
// }, []);
>>>>>>> 702e8518a7eb43e06cd126bb24810b15e3ab09b5
