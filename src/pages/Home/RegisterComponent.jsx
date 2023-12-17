import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "./TextInputComponent.jsx";
import { UserContext } from "../../funcs/userContext.jsx";
import { useContext } from "react";
import { checkAuth } from "../../api/user.jsx";
import { registerRequest } from "../../api/register.jsx";

// And now we can use these
function Register() {
  const { setUser, setIsModalOpen } = useContext(UserContext);

  return (
    <>
      <h1>Register new account!</h1>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          password: Yup.string()
            .required("Required")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
          const result = await registerRequest(values);
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
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
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

export default Register;
