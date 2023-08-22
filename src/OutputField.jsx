function OutputField() {
  <div className="output">
    <div className="amount">
      <h2 className="amount__tip">Tip Amount</h2>
      <p className="person">/ person</p>
      <div className="tip-output">0.00</div>
    </div>
    <div className="total">
      <h2 className="amount__tip">Total</h2>
      <p className="person">/ person</p>
      <div className="tip-output">0.00</div>
    </div>
    <button className="reset-btn">reset</button>
  </div>;
}

export default OutputField;
