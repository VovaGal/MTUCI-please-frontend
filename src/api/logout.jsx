import axios from "./axiosConfig";

export const loggingOut = async () => {
  try {
    const response = await axios.post("http://localhost:8000/api/logout");
    if (response.status === 200) {
      return true;
    } else {
      console.error(`Logout failed with status: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};
