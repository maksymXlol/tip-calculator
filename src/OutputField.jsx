import PropTypes from "prop-types";

OutputField.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
};

function OutputField({ title, amount }) {
  return (
    <div className="field">
      <h2 className="field__title">{title}</h2>
      <p className="per-person">/ person</p>
      <div className="tip-output">{amount}</div>
    </div>
  );
}

export default OutputField;
