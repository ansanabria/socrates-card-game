import Card from "./Card";

function Deck({ data, state }) {
  return (
    <div className="relative flex">
      {data.map((pregunta, index) => {
        const style = {
          transform: `translateX(${index * 2}px)`,
          zIndex: data.length - index,
        };
        if (index === 0) {
          return (
            <div key={pregunta} className="z-50" style={style}>
              <Card question={pregunta} isInteractive={true} state={state} />
            </div>
          );
        }
        return (
          <div key={pregunta} className="absolute" style={style}>
            <Card question={pregunta} state={state} />
          </div>
        );
      })}
    </div>
  );
}

export default Deck;
