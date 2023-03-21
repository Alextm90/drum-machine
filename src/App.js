

import './index.css';
import { useEffect, useState } from 'react'
import sounds from "./sounds"

function App() {
const [display, setDisplay] = useState("Play Me!")
const { src1, src2, src3, src4, src5, src6, src7, src8, src9 } = sounds;

  useEffect(() => {
    document.addEventListener('keydown', getKeyDown)
  },[]);

const getKeyDown = (e) => {
  if (e.key.toLowerCase() === "q") {
      playKeyDown("Q")
      getDisplay("Heater 1")
  }
  console.log(e.key)
  if (e.key.toLowerCase() === "w") {
    playKeyDown("W")
    getDisplay("Heater 2")
  }
  if (e.key.toLowerCase() === "e") {
    playKeyDown("E")
    getDisplay("Heater 3")
  }
  if (e.key.toLowerCase() === "a") {
    playKeyDown("A")
    getDisplay("Heater 4")
  }
  if (e.key.toLowerCase() === "s") {
    playKeyDown("S")
    getDisplay("Clap")
  }
  if (e.key.toLowerCase() === "d") {
    playKeyDown("D")
    getDisplay("Open HH")
  }
  if (e.key.toLowerCase() === "z") {
    playKeyDown("Z")
    getDisplay("Kick n Hat")
  }
  if (e.key.toLowerCase() === "x") {
    playKeyDown("X")
    getDisplay("Kick")
  }
  if (e.key.toLowerCase() === "c") {
    playKeyDown("C")
    getDisplay("Closed HH")
  }
}

const getDisplay = (str) => {
   setDisplay(str)
};
const playKeyDown = (id) => {
  document.getElementById(id).play()
};

const handleClick = (e) => {
  if (e.currentTarget.id === "heater1") {
     document.getElementById("Q").play();
     getDisplay("Heater 1"); 
   }
  if (e.currentTarget.id === "heater2") {
     document.getElementById("W").play();
     getDisplay("Heater 2");
   }
  if (e.currentTarget.id === "heater3") {
     document.getElementById("E").play();
     getDisplay("Heater 3");
  }
  if (e.currentTarget.id === "heater4") {
     document.getElementById("A").play();
     getDisplay("Heater 4");
  }
  if (e.currentTarget.id === "clap") {
     document.getElementById("S").play();
     getDisplay("Clap");
  }
  if (e.currentTarget.id === "open-HH") {
     document.getElementById("D").play();
     getDisplay("Open HH");
  }
  if (e.currentTarget.id === "kick-n-hat") {
     document.getElementById("Z").play();
     getDisplay("Kick n Hat");
  }
  if (e.currentTarget.id === "kick") {
    document.getElementById("X").play();
    getDisplay("Kick");
  }
  if (e.currentTarget.id === "closed-HH") {
    document.getElementById("C").play();
    getDisplay("Closed HH");
  }
}
  return (
    <div className="App" id='drum-machine'>
      <div className='container' id='display'> 
         <div id='description'>{display}</div>
         <div className='display-container'>
           <button className='drum-pad' id='heater1' type="button" onClick={handleClick}><audio src={src1} className="clip" id="Q"></audio>Q</button>
           <button className='drum-pad' id='heater2' type="button" onClick={handleClick}><audio src={src2} className="clip" id="W"></audio>W</button>
           <button className="drum-pad" id='heater3' type="button" onClick={handleClick}><audio src={src3} className="clip" id="E"></audio>E</button>
           <button className='drum-pad' id='heater4' type="button" onClick={handleClick}><audio src={src4} className="clip" id="A"></audio>A</button>
           <button className='drum-pad' id='clap' type="button"  onClick={handleClick}><audio src={src5} className="clip" id="S"></audio>S</button>
           <button className='drum-pad' id='open-HH' type="button" onClick={handleClick}><audio src={src6} className="clip" id="D"></audio>D</button>
           <button className='drum-pad' id='kick-n-hat' type="button" onClick={handleClick}><audio src={src7}className="clip" id="Z"></audio>Z</button>
           <button className='drum-pad' id='kick' type="button" onClick={handleClick}><audio src={src8} className="clip" id="X"></audio>X</button>
           <button className='drum-pad' id='closed-HH' type="button" onClick={handleClick}><audio src={src9} className="clip" id="C"></audio>C</button>
         </div>
      </div> 
    </div>
  );
}

export default App;