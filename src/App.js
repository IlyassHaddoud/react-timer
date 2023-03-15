import { useRef, useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [input, setInput] = useState("");
  let renderTime = useRef(0);
  let timerId = useRef(null);

  const handleInput = (e) => {
    renderTime.current++;
    setInput(e.target.value);
  };

  const start = () => {
    timerId.current = setInterval(() => {
      setTimer((x) => x + 1);
      renderTime.current++;
    }, 1000);
  };
  const stop = () => {
    clearInterval(timerId.current);
  };

  const reset = () => {
    stop();
    if (timer) {
      setTimer(0);
    }
  };
  return (
    <div className="App">
      <div className="timer">
        <h1>Timer</h1>
        <input type="text" onChange={(e) => handleInput(e)} />
        <div className="number">Seconds : {timer}</div>
        <div className="btn">
          <button onClick={start}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div>
        <div className="inputValue">{input}</div>
        <div className="renderTime">Render count : {renderTime.current}</div>
      </div>
    </div>
  );
}

export default App;
