import React, { useState } from "react";
import "./app.css";

function App() {
  const [userData, setUserData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    correct: "",
    subject: "None",
    level: "1",
    upse: false,
    history: false,
    geography: false,
    aptitude: false,
    generalKnowledge: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUserData((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { question, option1, option2, option3, correct ,subject ,level ,upse , history, geography, aptitude, generalKnowledge } = userData;
    const res = await fetch("",
    {method:"POST",
    Headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify({question, option1, option2, option3, correct , subject ,level ,upse ,history, geography, aptitude, generalKnowledge})
  }
  )

  if(res){
    setUserData({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    correct: "",
    subject: "None",
    level: "1",
    upse: false,
    history: false,
    geography: false,
    aptitude: false,
    generalKnowledge: false,
    })
    alert("data stored")
  } else {
    alert("plz fill the data")
  }

  };
  return (
    <div>
      <h1>Enter The Quiz Questions</h1>
      <form>
        <label for="question">Enter Question:</label>
        <br />
        <textarea
          type="text"
          id="question"
          name="question"
          cols="100"
          rows="5"
          placeholder="Write your Question Here"
          value={userData.question}
          onChange={postUserData}
        />
        <br />
        <br />

        <label for="option1">Option 1:&emsp;</label>
        <input type="text" id="option1" name="option1" value={userData.option1} onChange={postUserData}/>
        <br /> 

        <label for="option2">Option 2:&emsp;</label>
        <input type="text" id="option2" name="option2" value={userData.option2} onChange={postUserData}/>
        <br /> 

        <label for="option3">Option 3:&emsp;</label>
        <input type="text" id="option3" name="option3" value={userData.option3} onChange={postUserData}/>
        <br /> 

        <label for="correct">Correct Option:&emsp;</label>
        <input type="text" id="correct" name="correct" value={userData.correct} onChange={postUserData}/>
        <br /> 
        <br /> 

        <label for="subject">Subject:&emsp;</label>
        <select id="subject" name="subject" value={userData.subject} onChange={postUserData}>
        <option value="none" name="none" >None</option>          
        <option value="history" name="history" >History</option>
        <option value="geography" name="geography" >Geography</option>
        <option value="aptitude" name="aptitude" >Aptitude</option>
        </select>
        <br />
        <br />

        <label for="level">Level:&emsp;</label>
        <input
          type="number"
          name="level"
          id="level"
          min="1"
          max="10"
          defaultValue="1"
          value={userData.level}
          onChange={postUserData}
        />
        <br />
        <br />

        <fieldset>
          <legend>Topic of Interest</legend>
          <input type="checkbox" name="upse" id="checkbox1" checked={userData.upse} onChange={handleCheckboxChange} />
          <label for="checkbox1">UPSE&emsp;</label>
          <input type="checkbox" name="history" id="checkbox2" checked={userData.history} onChange={handleCheckboxChange} />
          <label for="checkbox2">History&emsp;</label>
          <input type="checkbox" name="geography" id="checkbox3" checked={userData.geography} onChange={handleCheckboxChange} />
          <label for="checkbox3">Geography&emsp;</label>
          <input type="checkbox" name="aptitude" id="checkbox4" checked={userData.aptitude} onChange={handleCheckboxChange} />
          <label for="checkbox4">aptitude&emsp;</label>
          <input type="checkbox" name="generalKnowledge" id="checkbox5" checked={userData.generalKnowledge} onChange={handleCheckboxChange} />
          <label for="checkbox5">General Knowledge&emsp;</label>
        </fieldset>
        <br />
        <br />

        <button type="submit" name="submit" onClick={submitData}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
