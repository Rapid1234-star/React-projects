import { useState } from "react";
import data from "./data";
import "./accordion.css";

function Accordion() {
  const [selected, setSelected] = useState(null);

  function handlesingle(index) {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  }
  return (
    <div className="accordion">
      <h1>React Accordion</h1>

      {data && data.length > 0
        ? data.map((item, index) => (
            <div className="item" key={item.id}>
              <div className="title" onClick={() => handlesingle(index)}>
                
                <h3>{item.title}</h3>
                <span>{selected === index ? "-" : "+"}</span>
                
              </div>
              {selected === index && (
                <div className="content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))
        : null}
    </div>
  );
}

export default Accordion;
