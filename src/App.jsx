import InputField from "./inputField";
import OutputField from "./OutputField";

function App() {
  return (
    <div className="app">
      <h1 className="spliter">
        spli <br />
        tter
      </h1>
      <div className="card">
        <div className="inputs">
          <InputField label={"Bill"} id={"bill"} />
          <InputField label={"Number of People"} id={"people"} />
        </div>
        <div className="outputs">
          <OutputField title={"tip amount"} amount={0.0} />
          <OutputField title={"total"} amount={0.0} />
          <button className="reset">reset</button>
        </div>
      </div>
    </div>
  );
}
export default App;
