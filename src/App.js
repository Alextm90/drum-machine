import './index.css';
import { useEffect, useState} from 'react'
import sounds from "./sounds"
import Slider from "./slider"

const App = () => {
const [display, setDisplay] = useState("Play Me!");
const [volume, setVolume] = useState(.5);
const { src1, src2, src3, src4, src5, src6, src7, src8, src9 } = sounds;

useEffect(() => {
    document.addEventListener('keydown', getKeyDown); 
}, [volume]);

const getKeyDown = (e) => {
  if (e.key.toLowerCase() === "q") {
      playKeyDown("Q");
      getDisplay("Heater 1");
  }
  console.log(e.key)
  if (e.key.toLowerCase() === "w") {
    playKeyDown("W");
    getDisplay("Heater 2");
  }
  if (e.key.toLowerCase() === "e") {
    playKeyDown("E");
    getDisplay("Heater 3");
  }
  if (e.key.toLowerCase() === "a") {
    playKeyDown("A");
    getDisplay("Heater 4");
  }
  if (e.key.toLowerCase() === "s") {
    playKeyDown("S");
    getDisplay("Clap");
  }
  if (e.key.toLowerCase() === "d") {
    playKeyDown("D");
    getDisplay("Open HH");
  }
  if (e.key.toLowerCase() === "z") {
    playKeyDown("Z");
    getDisplay("Kick n Hat");
  }
  if (e.key.toLowerCase() === "x") {
    playKeyDown("X");
    getDisplay("Kick");
  }
  if (e.key.toLowerCase() === "c") {
    playKeyDown("C");
    getDisplay("Closed HH");
  }
}

const playKeyDown = (str) => {
  let sound = document.getElementById(str);
  sound.volume = volume;
  sound.play();
};

const getDisplay = (str) => {
   setDisplay(str)
};

const handleClick = (e, str) => {
   let sound = document.getElementById(str);
   sound.volume = volume;
   sound.play();
   getDisplay(e.currentTarget.id); 
}

  return (
    <div className="App" id='drum-machine'>
      <div className='container' id='display'> 
         <div id='description'>{display}</div>
           <Slider volume={volume} setVolume={setVolume}/> 
         <div className='display-container'>
           <button className='drum-pad' id='Heater 1' type="button" onClick={(e) => handleClick(e,"Q")}><audio src={src1} className="clip" id="Q"></audio>Q</button>
           <button className='drum-pad' id='Heater 2' type="button" onClick={(e) => handleClick(e, "W")}><audio src={src2} className="clip" id="W"></audio>W</button>
           <button className="drum-pad" id='Heater 3' type="button" onClick={(e) => handleClick(e, "E")}><audio src={src3} className="clip" id="E"></audio>E</button>
           <button className='drum-pad' id='Heater 4' type="button" onClick={(e) => handleClick(e, "A")}><audio src={src4} className="clip" id="A"></audio>A</button>
           <button className='drum-pad' id='Clap' type="button"  onClick={(e) => handleClick(e, "S")}><audio src={src5} className="clip" id="S"></audio>S</button>
           <button className='drum-pad' id='Open HH' type="button" onClick={(e) => handleClick(e, "D")}><audio src={src6} className="clip" id="D"></audio>D</button>
           <button className='drum-pad' id='Kick n Hat' type="button" onClick={(e) => handleClick(e, "Z")}><audio src={src7}className="clip" id="Z"></audio>Z</button>
           <button className='drum-pad' id='Kick' type="button" onClick={(e) => handleClick(e, "X")}><audio src={src8} className="clip" id="X"></audio>X</button>
           <button className='drum-pad' id='Closed HH' type="button" onClick={(e) => handleClick(e, "C")}><audio src={src9} className="clip" id="C"></audio>C</button>
         </div>
      </div> 
      <p id="title">Drum Machine By Alex Miserandino</p>
    </div>
  );
}
export default App;











