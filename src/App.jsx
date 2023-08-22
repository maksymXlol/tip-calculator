import InputField from "./InputField";

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
        <div className="outputs"></div>
      </div>
    </div>
  );
}
export default App;
