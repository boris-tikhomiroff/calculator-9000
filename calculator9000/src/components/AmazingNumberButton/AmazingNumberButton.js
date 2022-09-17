const AmazingNumberButton = ({ click }) => {
  const numberButton = () => {
    const button = [];
    for (let i = 0; i < 10; i++) {
      button.push(
        <button value={i} onClick={click} key={i}>
          {i}
        </button>
      );
    }
    return button;
  };

  return <>{numberButton()}</>;
};

export default AmazingNumberButton;
