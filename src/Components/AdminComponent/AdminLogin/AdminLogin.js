import style from "./AdminLogin.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import baseUrl from "../../baseUrl";

function AdminLogin() {
  const [admin, setAdmin] = useState({
    admin_name: "",
    admin_password: "",
  });

  const navigate = useNavigate();

  function handleInput(e) {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  }

  async function login(e) {
    const value = await axios.get(`${baseUrl}/admin/${admin.admin_name}`);

    if (value.data.name === admin.admin_name) {
      if (value.data.password === admin.admin_password) {
        alert("Success");
        navigate("/AdminDashboard");
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("Wrong Admin name");
    }
  }

  return (
    <div id={style.container}>
      <div id={style.containerHeadingBox}>
        <h1>Admin Login</h1>
      </div>

      <div id={style.emailBox}>
        <label htmlFor="email">
          Email
          <input
            name="admin_name"
            onChange={(e) => handleInput(e)}
            type="text"
            id={style.email}
          />
        </label>
      </div>

      <div id={style.passwordBox}>
        <label htmlFor="password">
          Password
          <input
            name="admin_password"
            onChange={(e) => handleInput(e)}
            type="password"
            id={style.password}
          />
        </label>
      </div>

      <button onClick={(e) => login(e)} id={style.login}>
        Login
      </button>

      <NavLink to="/" id={style.goBackLink}>
        Go Back
      </NavLink>
    </div>
  );
}

export default AdminLogin;
