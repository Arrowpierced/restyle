import './App.css';
import React, {useState} from 'react';

function App() {
  const [bgColor, setBgColor] = useState('')
  
  
  

function pink (){
  bgColor !== '#e6a4b4' ? setBgColor("#e6a4b4") : setBgColor("white")
  
}

function darkmode(){
  bgColor !=='#2a2438' ? setBgColor("#2a2438") : setBgColor("white")
}

function zen(){
  bgColor !=='#b6cdbd' ? setBgColor("#b6cdbd") : setBgColor("white")
}

function monk(){
  bgColor !=='#f7f7f7' ? setBgColor("#f7f7f7") : setBgColor("white")
}

function breeze(){
  bgColor !=='#abcecf' ? setBgColor("#abcecf") : setBgColor("white")
}

function desert(){
  bgColor !=='#faf4f4' ? setBgColor("#faf4f4") : setBgColor("white")
}


  return (

    <body style={{backgroundColor: bgColor}}>
      <header>Choose a Color Theme</header>
      
      <div className="wrapper">
        <div className="pink container">
          <h1>Pretty Pink</h1>
          <button onClick={pink}>Select</button>
        </div>
        
        <div className="darkmode container">
          <h1>Dark Mode</h1>
          <button onClick={darkmode}>Select</button>
        </div>

        <div className="zen container">
          <h1>Zen Garden</h1>
          <button onClick={zen}>Select</button>
        </div>

        <div className="blue container">
          <h1>Blue Breeze</h1>
          <button onClick={breeze}>Select</button>
        </div>

        <div className="white container">
          <h1>Calm Monk</h1>
          <button onClick={monk}>Select</button>
        </div>

        <div className="desert container">
          <h1>Desert Nomad</h1>
          <button onClick={desert}>Select</button>
        </div>
      </div>
    </body>
  );
}

export default App;
