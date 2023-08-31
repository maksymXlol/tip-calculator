import PropTypes from "prop-types";

OutputField.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
};

function OutputField({ title, amount }) {
  const valueTrim = (value) => {
    return Math.floor(value * 100) / 100;
  };

  return (
    <div className="field">
      <h2 className="field__title">{title}</h2>
      <p className="per-person">/ person</p>
      <div className="tip-output">{valueTrim(amount)}</div>
    </div>
  );
}

export default OutputField;
