import { useState } from "react";

import Login from "./Login.jsx";
import Register from "./Register.jsx";

export const LoginModal = () => {
  const [isHaveAccount, setIsisHaveAccount] = useState(true);
  const toggleHaveAccount = () => {
    setIsisHaveAccount(!isHaveAccount);
  };

  

  return (
    <>
      <div className="modal-content">
        <div className="modal-forms">
          {isHaveAccount ? <Login /> : <Register />}
        </div>
        <div>
          <button onClick={toggleHaveAccount}>
            {isHaveAccount ? "sign up" : "sign in"}
          </button>
        </div>
      </div>
    </>
  );
};
