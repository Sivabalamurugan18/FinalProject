import style from "./AdminDashboard.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import pic4 from "../../../images/logo.png";
import { Button } from "react-bootstrap";
import { blue, green, yellow } from "@mui/material/colors";

function AdminDashboard() {
  const navigate = useNavigate();

  function goToAdminLogin() {
    navigate("/AdminLogin");
  }

  return (
    <>
      <div id={style.header}>
        <div id={style.headerHeadingBox}>
          <h3>Online Exam System</h3>
        </div>

        <div id={style.headerMenuBox}>
          {/* <NavLink exact to="/AdminDashboard">
            {" "}
            <span> Dashboard</span>{" "}
          </NavLink> */}
          <Button style={{color:'yellow'}} >
            {" "}
            <span onClick={goToAdminLogin}> Logout</span>
            </Button>
        </div>
      </div>

      <div id={style.content}>
        <div id={style.sideMenubar}>
          <div id={style.sideMenubarImageBox}>
            <img src={pic4} alt="" />
          </div>

          <div id={style.sideMenubarList}>
            <NavLink exact className={style.removeUnderline} to="/AdminDashboard/Subject">
              {" "}
              <button>
                {" "}
                <span> Subject </span>
              </button>
            </NavLink>
            <NavLink exact className={style.removeUnderline} to="/AdminDashboard/Exam">
              {" "}
              <button>
                {" "}
                <span> Exam </span>
              </button>
            </NavLink>
            <NavLink exact className={style.removeUnderline} to="/AdminDashboard/Question">
              {" "}
              <button>
                {" "}
                <span> Question </span>
              </button>
            </NavLink>
            <NavLink exact className={style.removeUnderline} to="/AdminDashboard/Result">
              {" "}
              <button>
                {" "}
                <span> Result </span>
              </button>
            </NavLink>
            <NavLink exact className={style.removeUnderline} to="/AdminDashboard/StudentList">
              {" "}
              <button>
                {" "}
                <span> StudentList </span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
