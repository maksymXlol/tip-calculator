import PropTypes from "prop-types";

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  validation: PropTypes.func,
};

function InputField({ label, id, value, onChange, validation }) {
  const error = validation();

  return (
    <div className="input-container">
      <div className="flex">
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
        {!!error && <p className="error">{error}</p>}
      </div>
      <input
        min={0}
        type="number"
        id={id}
        className="input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
