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
    playKeyDown("C")
    getDisplay("Closed HH");
  }
}

const playKeyDown = (id) => {
  let sound = document.getElementById(id);
  sound.volume = volume;
  sound.play();
};

const getDisplay = (str) => {
   setDisplay(str)
};

const handleClick = (e) => {
  if (e.currentTarget.id === "heater1") {
     let sound = document.getElementById("Q");
     sound.volume = volume;
     sound.play();
     getDisplay("Heater 1"); 
   }
  if (e.currentTarget.id === "heater2") {
     let sound = document.getElementById("W");
     sound.volume = volume;
     sound.play();
     getDisplay("Heater 2");
   }
  if (e.currentTarget.id === "heater3") {
     let sound = document.getElementById("E");
     sound.volume = volume;
     sound.play();
     getDisplay("Heater 3");
  }
  if (e.currentTarget.id === "heater4") {
     let sound = document.getElementById("A");
     sound.volume = volume;
     sound.play();
     getDisplay("Heater 4");
  }
  if (e.currentTarget.id === "clap") {
     let sound = document.getElementById("S");
     sound.volume = volume;
     sound.play();    
     getDisplay("Clap");
  }
  if (e.currentTarget.id === "open-HH") {
     let sound = document.getElementById("D");
     sound.volume = volume;
     sound.play();
     getDisplay("Open HH");
  }
  if (e.currentTarget.id === "kick-n-hat") {
     let sound = document.getElementById("Z");
     sound.volume = volume;
     sound.play();
     getDisplay("Kick n Hat");
  }
  if (e.currentTarget.id === "kick") {
    let sound = document.getElementById("X");
    sound.volume = volume;
    sound.play();
    getDisplay("Kick");
  }
  if (e.currentTarget.id === "closed-HH") {
    let sound = document.getElementById("C");
    sound.volume = volume;
    sound.play()
    getDisplay("Closed HH");
  }
}

  return (
    <div className="App" id='drum-machine'>
      <div className='container' id='display'> 
         <div id='description'>{display}</div>
               <Slider volume={volume} setVolume={setVolume}/> 
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