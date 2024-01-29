import style from "../../SubjectComponent/Subject.module.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../../../baseUrl";

function AddQuestion() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState({
    qname: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: "",
    ename: id,
    sname: "",
  });

  function onInputChange(e) {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  }

 
  async function addnewQuestion() {
    // Format the data before sending it
    const formattedQuestion = {
      ...question,
      ename: { id: id },
      sname: { name: document.getElementById("subjectField").value },
    };

    await axios.post(`${baseUrl}/question`, formattedQuestion);
    navigate(`/AdminDashboard/Exam/ViewQuestion/${id}`);
  }

  const handleGoBack = () => {
    navigate(`/AdminDashboard/Exam`);
  };

  return (
    <>
      <div id={style.displayHeadingBox}>
        <h2>Adding Question</h2>
      </div>

      <div id={style.addBox} className={style.addQuestion}>
        <label>Question Name </label>
        <input
          onChange={(e) => onInputChange(e)}
          name="qname"
          type="text"
          placeholder="Enter Question"
        />

        <label>Enter Option A </label>
        <input
          onChange={(e) => onInputChange(e)}
          name="optionOne"
          type="text"
          placeholder="Enter Option A"
        />

        <label>Enter Option B</label>
        <input
          onChange={(e) => onInputChange(e)}
          name="optionTwo"
          type="text"
          placeholder="Enter Option B"
        />

        <label>Enter Option C</label>
        <input
          onChange={(e) => onInputChange(e)}
          name="optionThree"
          type="text"
          placeholder="Enter Option C"
        />

        <label>Enter Option D</label>
        <input
          onChange={(e) => onInputChange(e)}
          name="optionFour"
          type="text"
          placeholder="Enter Option D"
        />

        <label>Enter Question Answer</label>
        <input
          onChange={(e) => onInputChange(e)}
          name="answer"
          type="text"
          placeholder="Enter Question answer (don't write option A,B,C,D)"
        />

        <label>Enter Subject</label>
        <input
          onChange={(e) => onInputChange(e)}
          name="sname"
          id="subjectField"
          type="text"
          placeholder="Enter Subject"
        />

        <div id={style.buttonBox}>
          <button onClick={addnewQuestion}>Add</button>
          <button onClick={handleGoBack}>Go back</button>
        </div>
      </div>
    </>
  );
}

export default AddQuestion;
