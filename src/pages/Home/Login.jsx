import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "./Components";
import React, { useContext } from 'react';
import axios from "axios";
import { UserContext } from "./Home";
import { checkAuth } from "../../api/user";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

// And now we can use these
function Login() {

  const { setUser, setIsModalOpen } = useContext(UserContext);


  return (
    <>
      <h1>Login into account</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .required("Required"),
          password: Yup.string()
            .required("Required")
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
          await axios
            .post("http://localhost:8000/api/login", values)
            .then(() => {
              checkAuth().then((user) => setUser(user));
              setIsModalOpen(false);
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        <Form>
          <MyTextInput
            label="Username"
            name="username"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="qweQWE!@#"
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Login;
