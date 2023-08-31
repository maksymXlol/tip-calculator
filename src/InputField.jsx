import PropTypes from "prop-types";

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

function InputField({ label, id, value, onChange }) {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
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
