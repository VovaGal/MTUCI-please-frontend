import axios from "./axiosConfig";
import { useState, useEffect } from 'react';

export const docInfo = async () => {
  let result = [];
  try {
    const response = await axios.get("http://localhost:8000/first_level/persons");
    result = response.data;
    console.log("API response:", result); // log the API response
  } catch (error) {
    console.error(error);
  }
  return result;
};
