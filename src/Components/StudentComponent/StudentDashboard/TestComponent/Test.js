import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import baseUrl from "../../../baseUrl";
import style from "../StudentDashboard.module.css";  

function Test() {
  let { id } = useParams();
  let { category } = useParams();
  let { passMarks } = useParams();
  let { marks } = useParams();
  const navigate = useNavigate();
  let questionnum = 1;

  const [allQuestions, setAllQuestions] = useState([]);
  const [results, setResults] = useState([]);
  const [questionLimit, setQuestionLimit] = useState(marks);
  const [remainingTime, setRemainingTime] = useState(60 * questionLimit);
  const [examSubmitted, setExamSubmitted] = useState(false);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    async function getAllQuestions() {
      try {
        let value = await axios.get(`${baseUrl}/exam/${id}/question`);
        const shuffledQuestions = shuffleArray(value.data);
        const selectedQuestions = shuffledQuestions.slice(0, questionLimit);
        setAllQuestions(selectedQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }

    async function getAllResults() {
      try {
        let value = await axios.get(`${baseUrl}/result`);
        const formattedResults = value.data.map((result) => ({
          user_email: result.email.email,
          exam_name: result.sname.name,
        }));
        setResults(formattedResults);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    }

    getAllQuestions();
    getAllResults();
  }, [id, questionLimit]);

  const [answer, setAnswer] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
  });

  let correctAnswer = [];

  function onRadioButtonChange(e) {
    setAnswer({
      ...answer,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (remainingTime === 0 && !examSubmitted) {
      submitTest();
    }
  }, [remainingTime, examSubmitted]);

  async function submitTest() {
    if (!examSubmitted) {
      let score = 0;
      let status = "";

      for (let i = 0; i < allQuestions.length; i++) {
        correctAnswer.push(allQuestions[i].answer);
      }

      for (let i = 0; i < questionLimit; i++) {
        if (correctAnswer[i] === answer[`answer${i + 1}`]) {
          score++;
        }
      }

      if (score >= passMarks) status = "Pass";
      else status = "Fail";

      var date = new Date();
      var d =
        date.getDate() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getFullYear();
      var t =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      let data = {
        status: status,
        score: score,
        email: { email: sessionStorage.getItem("user") },
        edate: d + " " + t,
        sname: { name: category },
        totalMarks: marks,
        examId: { id: id },
        totalQuestion: marks,
      };

      const hasTakenTest = results.some(
        (result) =>
          result.user_email === data.email.email &&
          result.exam_name === data.sname.name
      );

      if (!hasTakenTest) {
        await axios.post(`${baseUrl}/result`, data);
        navigate("/StudentDashboard/Result");
        setExamSubmitted(true);
      } else {
        window.alert("Already You Taken Test......");
        setExamSubmitted(true);
      }
    } else {
      window.alert("Already You Taken Test......");
    }
  }

  return (
    <>
    <div className={style.timerContainer}>
  <p className={style.timerText}>
    Time Remaining: {Math.floor(remainingTime / 60)}:{remainingTime % 60}
  </p>
</div>
      <div id={style.displayBoxQuestionHeadingBox}>
        <h1>Answer all the questions</h1>
        
      </div>
      {allQuestions.map((data, i) => {
        return (
          <div id={style.displayBoxQuestionBox} key={i}>
            <div id={style.divQuestion}>
              <span>
                {questionnum++}. {data.qname}
              </span>
            </div>

            <div>
              <input
                onChange={(e) => onRadioButtonChange(e)}
                value={data.optionOne}
                id={style.option1}
                name={`answer${i + 1}`}
                type="radio"
              />
              <label htmlFor="option1">{data.optionOne}</label>
            </div>

            <div>
              <input
                onChange={(e) => onRadioButtonChange(e)}
                value={data.optionTwo}
                id={style.option2}
                name={`answer${i + 1}`}
                type="radio"
              />
              <label htmlFor="option2">{data.optionTwo}</label>
            </div>

            <div>
              <input
                onChange={(e) => onRadioButtonChange(e)}
                value={data.optionThree}
                id={style.option3}
                name={`answer${i + 1}`}
                type="radio"
              />
              <label htmlFor="option3">{data.optionThree}</label>
            </div>

            <div>
              <input
                onChange={(e) => onRadioButtonChange(e)}
                value={data.optionFour}
                id={style.option4}
                name={`answer${i + 1}`}
                type="radio"
              />
              <label htmlFor="option4">{data.optionFour}</label>
            </div>
          </div>
        );
      })}
     
      {remainingTime > 0 && !examSubmitted && (
        <div id={style.submitExam}>
          <button onClick={submitTest}>Submit Exam</button>
        </div>
      )}
    </>
  );
}

export default Test;
