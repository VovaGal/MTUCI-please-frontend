import axios from "axios";
import React, { useState, useEffect } from 'react';


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;





const docInfo = async () => {
  
  let result;
  try {
    const response = await axios.get("http://localhost:8000/first_level/persons");
    result = response.data;
  } catch (error) {
    console.error(error);
  }
  return result;
};

export default docInfo;