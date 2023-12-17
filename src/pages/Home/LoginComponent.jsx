import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "./TextInputComponent.jsx";
import { useContext } from "react";
import { UserContext } from "../../funcs/userContext.jsx";
import { checkAuth } from "../../api/user.jsx";
import { loginRequest } from "../../api/login.jsx";

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
          username: Yup.string().required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
          const result = await loginRequest(values);
          if (result) {
            checkAuth().then((user) => setUser(user));
            setIsModalOpen(false);
          } else {
            alert("Login failed");
          }
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
            placeholder="qweQWE!@#1"
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
