import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");
  function handlecolorChange(e) {
    setColor(e.target.value);
  }
  return (
    <>
      <div className="Color-Picker">
        <h1>Color Picker</h1>
        <div className="colorname" style={{ backgroundColor: color }}>
          Selected Color: {color}
        </div>
        <label htmlFor="color">Choose Color: </label>
        <input
          id="color"
          type="color"
          value={color}
          onChange={handlecolorChange}
        />
      </div>
    </>
  );
}

export default App;
