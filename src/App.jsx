import { useState } from "react";
import InputField from "./inputField";
import OutputField from "./OutputField";

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(5);

  const handleChange = () => {};

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
          />
          <InputField
            label={"Number of People"}
            id={"people"}
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
          <div className="tip">Select Tip %</div>
          <input type="radio" name="tip" value={5} />
          <input type="radio" name="tip" value={10} />
          <input type="radio" name="tip" value={15} />
          <input type="radio" name="tip" value={25} />
          <input type="radio" name="tip" value={50} />
          <input type="radio" name="tip" value={"custom"} />
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
          <button className="reset">reset</button>
        </div>
      </div>
    </div>
  );
}
export default App;
