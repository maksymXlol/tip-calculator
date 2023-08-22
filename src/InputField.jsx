function InputField({ label, id }) {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input type="text" id={id} className="input" value={0} />
    </div>
  );
}

export default InputField;
