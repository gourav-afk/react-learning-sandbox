import './App.css'
import {useState} from "react";

function App() {
  const colours = ['cadetblue', 'hotpink', 'salmon', 'silver', 'gold'];
  const [currentColor, setCurrentColor] = useState('white');
  const changeColor = event => {
      setCurrentColor(event.target.value);
  }

  return (
      <div className="app-container" style={{backgroundColor: currentColor}}>
        <h1>Color Picker</h1>
        <div className="color-boxes">
            {colours.map(color => (
                <div key={color} className="box"  style={{backgroundColor: color}}>
                    <input type="radio" name="color" value={color} onChange={changeColor}/>
                </div>
            ))}

        </div>
        <div className="color-picker">
            <label htmlFor="color-picker">Pick More!</label>
            <input type="color" id="color-picker" onChange={changeColor}/>
        </div>
      </div>
  )
}

export default App
