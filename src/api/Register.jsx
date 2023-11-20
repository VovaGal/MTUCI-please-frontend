import axios from "axios";


const postData = {
  // Your data to be sent in the POST request
};

axios.post('http://localhost:8000', postData)
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });