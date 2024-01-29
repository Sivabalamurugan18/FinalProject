import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import S1 from './S1';
import S2 from './S2';
import S3 from './S3';
import S4 from './S4';
import S5 from './S5';
import S6 from './S6';
import S7 from './S7';
import Home from "../HomeComponent/Home"
import StudentLogin from '../StudentComponent/StudentLogin/StudentLogin';
import StudentSignup from '../StudentComponent/StudentSignup/StudentSignup';
import AdminLogin from '../AdminComponent/AdminLogin/AdminLogin';
import AdminDashboard from '../AdminComponent/AdminDashboard/AdminDashboard';
import StudentDashboard from '../StudentComponent/StudentDashboard/StudentDashboard';
import Dashboard from '../AdminComponent/AdminDashboard/Dashboard/Dashboard';
import Subject from '../AdminComponent/AdminDashboard/SubjectComponent/Subject';
import Exam from '../AdminComponent/AdminDashboard/ExamComponent/Exam';
import Question from '../AdminComponent/AdminDashboard/QuestionComponent/Question';
import Result from '../AdminComponent/AdminDashboard/ResultComponent/Result';
import StudentList from '../AdminComponent/AdminDashboard/StudentList/StudentList';
import Details from '../AdminComponent/AdminDashboard/ExamComponent/DetailComponent/Details';
import ViewQuestion from '../AdminComponent/AdminDashboard/ExamComponent/ViewQuestion/ViewQuestion';
import AddQuestion from '../AdminComponent/AdminDashboard/ExamComponent/AddQuestion/AddQuestion';
import Student from '../AdminComponent/AdminDashboard/StudentList/Student/Student';
import StuSubject from "../StudentComponent/StudentDashboard/Subject/Subject"
import StuResult from "../StudentComponent/StudentDashboard/ResultComponent/Result"
import StuExam from "../StudentComponent/StudentDashboard/ExamComponent/Exam"
import StuTest from "../StudentComponent/StudentDashboard/TestComponent/Test"


import StdSideNav from './StdSideNav';

const StdSideNavRoute = () => {
  return (
    <BrowserRouter>
    <div className="d-flex">
        <div className="col-auto">
            <StdSideNav/>
        </div>
        <div>
            <Routes>
                {/* <Route path="/" element={<S1/>}></Route> */}
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/StudentLogin" element={<StudentLogin/>}></Route>
                <Route exact path="/StudentSignup" element={<StudentSignup/>}></Route>
                <Route exact path="/AdminLogin" element={<AdminLogin/>}></Route>
                <Route exact path="/AdminDashboard" element={<AdminDashboard/>}></Route>
                <Route exact path="/StudentDashboard" element={<StudentDashboard/>}></Route>
                <Route exact path="/AdminDashboard" element={<Dashboard/>}></Route>
                <Route exact path="/AdminDashboard/Subject" element={<Subject/>}></Route>
                <Route exact path="/AdminDashboard/Exam" element={<Exam/>}></Route>
                <Route exact path="/AdminDashboard/Question" element={<Question/>}></Route>
                <Route exact path="/AdminDashboard/Result" element={<Result/>}></Route>
                <Route exact path="/AdminDashboard/StudentList" element={<StudentList/>}></Route>
                <Route exact path="/AdminDashboard/Exam/Details/:id" element={<Details/>}></Route>
                <Route exact path="/AdminDashboard/Exam/ViewQuestion/:id" 
                      element={<ViewQuestion/>}></Route>
                       <Route exact path="/AdminDashboard/Exam/AddQuestion/:id" element={<AddQuestion/>}></Route>
                       <Route exact path="/AdminDashboard/StudentList/Details/:id" element={<Student/>}></Route>
                       <Route exact path="/StudentSubject" element={<StuSubject/>}></Route>
                       <Route exact path="/StudentDashboard/Result" element={<StuResult/>}></Route>
                       <Route exact path="/StudentDashboard/Exam/:category" element={<StuExam/>}></Route>
                       <Route exact path="/StudentDashboard/Exam/:category/:id/:passMarks/:marks" element={<StuTest/>}></Route>
                <Route path="/S2" element={<S2/>}></Route>
                <Route path="/S3" element={<S3/>}></Route>
                <Route path="/S4" element={<S4/>}></Route>
                <Route path="/S5" element={<S5/>}></Route>
                <Route path="/S6" element={<S6/>}></Route>
                <Route path="/S7" element={<S7/>}></Route>
            </Routes>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default StdSideNavRoute  


