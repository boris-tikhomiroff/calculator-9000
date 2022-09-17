import "./historic.scss";

const Historic = ({ values }) => {
  const listCalul = () => {
    const items = [];
    for (let i = 0; i < values.length; i++) {
      const operation = values[i].operation;
      const result = values[i].result;
      items.push(
        <p key={i}>
          {operation} = {result}
        </p>
      );
    }
    return items;
  };

  return <div className="historic">{listCalul()}</div>;
};

export default Historic;
