import { useState, useEffect } from "react";
import uniqid from "uniqid";
import AmazingNumberButton from "../AmazingNumberButton/AmazingNumberButton";
import GreatOperationButton from "../GreatOperationButton/GreatOperationButton";
import MagnificientEqualButton from "../MagnificientEqualButton/MagnificientEqualButton";
import BeautifulScreen from "../BeautifulScreen/BeautifulScreen";
import ItSOverNineThousand from "../ItSOverNineThousand/ItSOverNineThousand";
import SaveButton from "../SaveButton/SaveButton";
import Historic from "../Historic/Historic";
import TheTitle from "../TheTitle/TheTitle";

import "./calculator.scss";

const Calculator = () => {
  // en cours
  const [inProgress, setinProgress] = useState("");
  //  resultat
  const [result, setResult] = useState("0");
  // Historic
  const [historic, setHistoric] = useState("");

  let uniqId = localStorage.getItem("uniqueId");
  // console.log(uniqId);

  const handleClick = (e) => {
    switch (e.target.value) {
      case "=":
        setResult(inProgress + e.target.value);
        setResult(eval(inProgress));
        break;
      case "C":
        setinProgress("");
        setResult("0");
        break;
      case "+":
        setinProgress(inProgress + e.target.value);
        break;
      case "/":
        setinProgress(eval(inProgress) + e.target.value);
        break;
      case "*":
        setinProgress(eval(inProgress) + e.target.value);
        break;
      case ".":
        setinProgress(eval(inProgress) + e.target.value);
        break;
      default:
        setinProgress(inProgress + e.target.value);
    }
  };

  function setId() {
    if (localStorage.getItem("uniqueId") === null) {
      localStorage.setItem("uniqueId", uniqid());
    }
  }
  setId();

  function getData() {
    fetch(
      `http://localhost/calculator-9000/api/calculator/read_calcul.php?test=${uniqId}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setHistoric(response);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => getData());

  function postData() {
    if (result !== "" && inProgress !== "") {
      fetch("http://localhost/calculator-9000/api/calculator/post_calcul.php", {
        method: "POST",
        body: JSON.stringify({
          result: result,
          inProgress: inProgress,
          uniqId: uniqId,
        }),
      })
        .then((response) => response.text())
        .then((response) => {
          // console.log(response);
        });
      // .catch((error) => console.log(error));
    }
  }

  return (
    <div className="calculator">
      <TheTitle />
      <section className="screen">
        <BeautifulScreen inProgress={inProgress} result={result} />
        {result > 9000 ? <ItSOverNineThousand /> : null}
        <Historic values={historic} />
      </section>
      <section className="keyboard">
        <AmazingNumberButton click={handleClick} />
        <GreatOperationButton click={handleClick} />
        <MagnificientEqualButton click={handleClick} />
        <SaveButton click={postData} />
      </section>
      {/* <ItSOverNineThousand result={result} /> */}
    </div>
  );
};

export default Calculator;
