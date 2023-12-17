import { useState } from "react";

import Login from "./LoginComponent.jsx";
import Register from "./RegisterComponent.jsx";

export const LoginModal = () => {
  const [isHaveAccount, setIsisHaveAccount] = useState(true);
  const toggleHaveAccount = () => {
    setIsisHaveAccount(!isHaveAccount);
  };



  return (
    <>
      <div className="modal-content">
        <h3>You need an account to play!</h3>
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
