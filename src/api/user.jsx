import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const checkAuth = async () => {
  let result = null;
  try {
    const response = await axios.get("http://localhost:8000/api/user");
    result = response.data;
  } catch (error) {
    console.error(error);
  }
  return result;
};
