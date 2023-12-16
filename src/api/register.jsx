import axios from "./axiosConfig";


export const registerRequest = async (values) => {

    try {
      const response = await axios.post('http://localhost:8000/api/register', values);
      if (response.status === 201) {
        return true;
      }
    } catch (error) {
      console.error(error);
    }
    return false;
  };