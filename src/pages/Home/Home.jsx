  // TODO: гугли что такое formik 
  // TODO: вынести логику с беком(ручки) по модульной архитектуре
  // TODO: прочитать что такое HOC и вынести туда логику авторизации
  // TODO: гугли что такое layout и сделай его
  // TODO: картинки в svg формате

import {Routes, Route, useNavigate} from 'react-router-dom';





function Home() {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/register');
  };
  return (
    <div>
      <div>
        <button type="button" onClick={navigateLogin}>Register</button>
        <hr />
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home