import "./BeautifulScreen.scss";
const BeautifulScreen = ({ inProgress, result }) => {
  return (
    <>
      <p className="inProgress">{inProgress}</p>
      <p className="result">{result}</p>
    </>
  );
};

export default BeautifulScreen;
