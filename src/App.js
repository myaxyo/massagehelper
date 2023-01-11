import { useState } from "react";
import "./App.css";

function App() {
  const [textValue, setTextValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const handleText = () => {
    setResult(textValue.replace("*", inputValue));
    setInputValue("");
  };
  return (
    <div className="App">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <textarea
          placeholder="Enter the text and put * in the place where should be changed"
          cols="40"
          rows="30"
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
        ></textarea>
        <input
          type="text"
          placeholder="*"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button onClick={handleText}>Generate</button>
        <textarea
          cols="40"
          rows="30"
          placeholder="Result"
          value={result}
          onChange={(e) => {
            setResult(e.target.value);
          }}
        ></textarea>
      </form>
    </div>
  );
}

export default App;
