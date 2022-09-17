const GreatOperationButton = ({ click }) => {
  const operator = ["+", "-", "/", "*", "C", "."];

  const operatorButton = operator.map((button, idx) => {
    return (
      <button key={idx} value={button} onClick={click} className="operator">
        {button}
      </button>
    );
  });

  return operatorButton;
};

export default GreatOperationButton;
