import { useState } from "react";
import InputField from "./inputField";
import OutputField from "./OutputField";

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(5);

  const handleReset = () => {
    setBill(0);
    setPeople(1);
    setTip(0);
  };

  return (
    <div className="app">
      <h1 className="spliter">
        spli <br />
        tter
      </h1>
      <div className="card">
        <div className="inputs">
          <InputField
            label={"Bill"}
            id={"bill"}
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            validation={() => {
              return;
            }}
          />
          <InputField
            label={"Number of People"}
            id={"people"}
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            validation={() => {
              if (people <= 0) {
                return "can't be zero";
              }
              return "";
            }}
          />
          <div className="tip">Select Tip %</div>
          <div className="grid">
            <button
              className={`tip__btn ${tip == 5 ? "active" : ""}`}
              onClick={() => {
                setTip(5);
              }}
            >
              5%
            </button>
            <button
              className={`tip__btn ${tip == 10 ? "active" : ""}`}
              onClick={() => setTip(10)}
            >
              10%
            </button>
            <button
              className={`tip__btn ${tip == 15 ? "active" : ""}`}
              onClick={() => setTip(15)}
            >
              15%
            </button>
            <button
              className={`tip__btn ${tip == 25 ? "active" : ""}`}
              onClick={() => setTip(25)}
            >
              25%
            </button>
            <button
              className={`tip__btn ${tip == 50 ? "active" : ""}`}
              onClick={() => setTip(50)}
            >
              50%
            </button>
            <input
              type="number"
              className={`custom`}
              placeholder="Custom"
              onChange={(e) => setTip(e.target.value)}
            />
          </div>
        </div>
        <div className="outputs">
          <OutputField
            title={"tip amount"}
            amount={(bill * tip) / 100 / people}
          />
          <OutputField
            title={"total"}
            amount={(bill * tip) / 100 / people + bill / people}
          />
          <button className="reset" onClick={handleReset}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
