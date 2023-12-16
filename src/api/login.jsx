import axios from "./axiosConfig";


export const loginRequest = async (values) => {

    try {
      const response = await axios.post('http://localhost:8000/api/login', values);
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      console.error(error);
    }
    return false;
  };