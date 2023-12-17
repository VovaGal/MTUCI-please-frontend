import axios from "./axiosConfig";

export const registerScore = async (score) => {
    try {
      const response = await axios.post('http://localhost:8000/api/set_value', score);
      if (response.status === 201) {
        return true;
      }
    } catch (error) {
      console.error(error);
    }
    return false;
  };


