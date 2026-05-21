import './App.css'
import {useState} from "react";

function App() {
  const[color, setColor] = useState('white');
  const changeColor = event => {
      setColor(event.target.value);
  }

  return (
      <div className="app-container" style={{backgroundColor: color}}>
        <h1>Color Picker</h1>
        <div className="color-boxes">
            <div className="first-color box">
                <input type="radio" name="color" value="red"  onChange={changeColor}/>
            </div>
            <div className="second-color box">
                <input type="radio" name="color" value="gold"  onChange={changeColor}/>
            </div>
            <div className="third-color box">
                <input type="radio" name="color" value="silver"  onChange={changeColor}/>
            </div>
            <div className="fourth-color box">
                <input type="radio" name="color" value="teal"  onChange={changeColor}/>
            </div>
            <div className="fifth-color box">
                <input type="radio" name="color" value="hotpink"  onChange={changeColor}/>
            </div>
            <div className="sixth-color box">
                <input type="radio" name="color" value="maroon"  onChange={changeColor}/>
            </div>
            <div className="seventh-color box">
                <input type="radio" name="color" value="orange" onChange={changeColor}/>
            </div>
        </div>
        <div className="color-picker">
            <label htmlFor="color-picker">Pick More!</label>
            <input type="color" id="color-picker" onChange={changeColor}/>
        </div>
      </div>
  )
}

export default App
