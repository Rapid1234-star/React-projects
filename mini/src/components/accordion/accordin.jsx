import { useState } from "react";
import data from "./data";
import "./accordion.css";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multipleselected, setMultipleselected] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const[value,setValue]=useState(null)
  function handlesingle(index) {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  }
  function enbableMultiple() {
    setMultipleselected(!multipleselected);
    if(!multipleselected){
      setValue("Single")
    }
    else{
      setValue("Multiple")
    }
  }

  function handleMultiple(index) {
    // use functional update to avoid stale state and toggle index presence
    setMultiple((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      return [...prev, index];
    });
  }
  return (
    <div className="accordion">
      <h1>React Accordion</h1>
      <button onClick={() => enbableMultiple()}>{value} Selection</button>
      {data && data.length > 0
        ? data.map((item, index) => (
            <div className="item" key={item.id}>
              <div
                className="title"
                onClick={() => (multipleselected ? handleMultiple(index) : handlesingle(index))}
              >
                <h3>{item.title}</h3>
                {/* Show open/closed state depending on current mode */}
                <span>{multipleselected ? (multiple.includes(index) ? "-" : "+") : (selected === index ? "-" : "+")}</span>
              </div>
              {/* Render content when item is open in either mode */}
              {(multipleselected ? multiple.includes(index) : selected === index) && (
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
