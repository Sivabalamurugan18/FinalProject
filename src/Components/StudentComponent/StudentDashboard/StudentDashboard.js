import { NavLink,  useNavigate } from "react-router-dom";
import { useEffect } from "react";
import style from "./StudentDashboard.module.css";


function StudentDashboard() {
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      alert("Detect Illegal Way of Entering");
      navigate("/StudentLogin");
    }
  }, [navigate]);

  function logout() {
    sessionStorage.clear();
    navigate("/StudentLogin");
  }

  return (
    <>
     
        <div id={style.header}>
          <div id={style.headerHeadingBox}>
            <h3>Online Exam System</h3>
          </div>

          <div id={style.headerMenuBox}>
            <NavLink exact to="/StudentSubject">
              <span>Subject</span>
            </NavLink>
            <NavLink exact to="/StudentDashboard/Result">
              <span>My Result</span>
            </NavLink>
            <NavLink onClick={logout} exact to="/StudentLogin">
              <span>Logout</span>
            </NavLink>
          </div>
        </div>

        
        
      
    </>
  );
}

export default StudentDashboard;
