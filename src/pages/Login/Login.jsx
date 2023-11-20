import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../Register/Components";
import "./styles.css";
import "./styles-custom.css";

// And now we can use these
function Register() {
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
            type="text"
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

export default Register;
