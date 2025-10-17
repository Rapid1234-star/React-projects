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
      setValue("Multiple")
    }
    else{
      setValue("Single")
    }
  }

  function handleMultiple(index) {
    let temp = [...multiple];
    const found = temp.indexOf(index);
    if(found=== -1){temp.push(index);}
    else temp.splice(found, 1);
    setMultiple(temp);
  }
  return (
    <div className="accordion">
      <h1>React Accordion</h1>
      <button onClick={() => enbableMultiple()}>{value} Selection</button>
      {data && data.length > 0
        ? data.map((item, index) => (
            <div className="item" key={item.id}>
              <div className="title" onClick={() => (multipleselected ? handleMultiple(index) : handlesingle(index))}>
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
