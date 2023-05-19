function App() {
  return (
    <>
    <h1>Enter The Quiz Questions</h1>
    <form>
      <label for="question">Enter Question:</label>
      <br/>
      <textarea type="text" id="question" name="question" cols="100" rows="5"></textarea>
      <br/>
      <br/>

      <label for="subject">Subject:</label>
      <select id="subject" name="subject">
        <option value="history">History</option>
        <option value="geography">Geography</option>
        <option value="aptitude">aptitude</option>
      </select>
      <br/>
      <br/>

      <fieldset>
        <legend>Topic of Interest</legend>
        <input type="checkbox" name="checkbox" id="checkbox1"></input>
        <label for="checkbox1">UPSE&emsp;</label>
        <input type="checkbox" name="checkbox" id="checkbox2"></input>
        <label for="checkbox1">History&emsp;</label>
        <input type="checkbox" name="checkbox" id="checkbox3"></input>
        <label for="checkbox1">Geography&emsp;</label>
        <input type="checkbox" name="checkbox" id="checkbox4"></input>
        <label for="checkbox1">aptitude&emsp;</label>
        <input type="checkbox" name="checkbox" id="checkbox5"></input>
        <label for="checkbox1">General Knowledge&emsp;</label>
      </fieldset>
      <br/>
      <br/>

      <input type="submit"></input>
    </form>
    </>
  );
}

export default App;
