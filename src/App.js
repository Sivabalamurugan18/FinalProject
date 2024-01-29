
import Home from "./Components/HomeComponent/Home";

import StudentLogin from "./Components/StudentComponent/StudentLogin/StudentLogin";
import AdminLogin from "./Components/AdminComponent/AdminLogin/AdminLogin";
import AdminDashboard from "./Components/AdminComponent/AdminDashboard/AdminDashboard";
import StudentDashboard from "./Components/StudentComponent/StudentDashboard/StudentDashboard";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import StudentSignup from "./Components/StudentComponent/StudentSignup/StudentSignup";
//
import Dashboard from "./Components/AdminComponent/AdminDashboard/Dashboard/Dashboard";
import Subject from "./Components/AdminComponent/AdminDashboard/SubjectComponent/Subject";
import Exam from "./Components/AdminComponent/AdminDashboard/ExamComponent/Exam";
import Question from "./Components/AdminComponent/AdminDashboard/QuestionComponent/Question";
import Result from "./Components/AdminComponent/AdminDashboard/ResultComponent/Result";
import StudentList from "./Components/AdminComponent/AdminDashboard/StudentList/StudentList";
import Student from "./Components/AdminComponent/AdminDashboard/StudentList/Student/Student";

import Details from "./Components/AdminComponent/AdminDashboard/ExamComponent/DetailComponent/Details";
import ViewQuestion from "./Components/AdminComponent/AdminDashboard/ExamComponent/ViewQuestion/ViewQuestion";
import AddQuestion from "./Components/AdminComponent/AdminDashboard/ExamComponent/AddQuestion/AddQuestion";

import StuSubject from "./Components/StudentComponent/StudentDashboard/Subject/Subject";
import StuResult from "./Components/StudentComponent/StudentDashboard/ResultComponent/Result";
import StuExam from "./Components/StudentComponent/StudentDashboard/ExamComponent/Exam";
import StuTest from "./Components/StudentComponent/StudentDashboard/TestComponent/Test";

import Navbar from "./Components/Navbar";
import NavbarAdmin from "./Components/NavbarAdmin";
import AdmSideNavRoute from "./Components/AdminConsole/AdmSideNavRoute";
import NavbarStudent from "./Components/NavbarStudent";
import StdSideNavRoute from "./Components/StudentConsole/StdSideNavRoute";


function App() {
  return (
    <>
      {/* <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Home/>}></Route>
                  <Route exact path="/StudentLogin" element={<StudentLogin/>}></Route>
                  3<Route exact path="/StudentSignup" element={<StudentSignup/>}></Route>
                  4<Route exact path="/AdminLogin" element={<AdminLogin/>}></Route>
                 5 <Route exact path="/AdminDashboard" element={<AdminDashboard/>}></Route>
                 6 <Route exact path="/StudentDashboard" element={<StudentDashboard/>}></Route>
                

               7 <Route exact path="/AdminDashboard" element={<Dashboard/>}></Route>
                  
               8   <Route exact path="/AdminDashboard/Subject" element={<Subject/>}></Route>
                9  <Route exact path="/AdminDashboard/Exam" element={<Exam/>}></Route>
                 10 <Route exact path="/AdminDashboard/Question" element={<Question/>}></Route>
                 11 <Route exact path="/AdminDashboard/Result" element={<Result/>}></Route>
                12  <Route exact path="/AdminDashboard/StudentList" element={<StudentList/>}></Route>


                    13  <Route exact path="/AdminDashboard/Exam/Details/:id" element={<Details/>}></Route>
                    14  <Route exact path="/AdminDashboard/Exam/ViewQuestion/:id" 
                      element={<ViewQuestion/>}></Route>
                   15   <Route exact path="/AdminDashboard/Exam/AddQuestion/:id" element={<AddQuestion/>}></Route>

                   16   <Route exact path="/AdminDashboard/StudentList/Details/:id" element={<Student/>}></Route>

           17 <Route exact path="/StudentSubject" element={<StuSubject/>}></Route>
           18 <Route exact path="/StudentDashboard/Result" element={<StuResult/>}></Route>
            19<Route exact path="/StudentDashboard/Exam/:category" element={<StuExam/>}></Route>
            <Route exact path="/StudentDashboard/Exam/:category/:id/:passMarks/:marks" element={<StuTest/>}></Route>

              </Routes>
          </BrowserRouter> */}


      <Navbar></Navbar>

      {/* admin */}
      {/* <NavbarAdmin></NavbarAdmin>
      <AdmSideNavRoute></AdmSideNavRoute> */}

{/* student */}
      <NavbarStudent></NavbarStudent>
      <StdSideNavRoute></StdSideNavRoute>
      {/* <Footer></Footer> */}

    </>


  );

}



export default App;