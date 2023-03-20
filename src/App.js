import './index.css';

function App() {
  let src1 = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
  let src2 = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
  let src3 = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
  let src4 = "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
  let src5 = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
  let src6 = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
  let src7 = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
  let src8 = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
  let src9 = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";

  const handleClick = (e) => {
  if (e.currentTarget.id === "heater1") {
     document.getElementById("Q").play();
   }
  if (e.currentTarget.id === "heater2") {
     document.getElementById("W").play();
   }
  if (e.currentTarget.id === "heater3") {
     document.getElementById("E").play();
  }
  if (e.currentTarget.id === "heater4") {
     document.getElementById("A").play();
  }
  if (e.currentTarget.id === "clap") {
     document.getElementById("S").play();
  }
  if (e.currentTarget.id === "open-HH") {
     document.getElementById("D").play();
  }
  if (e.currentTarget.id === "kick-n-hat") {
     document.getElementById("Z").play();
  }
  if (e.currentTarget.id === "kick") {
    document.getElementById("X").play();
  }
  if (e.currentTarget.id === "closed-HH") {
    document.getElementById("C").play();
  }
}

  return (
    <div className="App">
      <div className='container' id='drum-machine'> 
         <div id='display' className='display-container'>
           <button className='drum-pad' id='heater1' value={src1} type="button" onClick={(event) => handleClick(event)}><audio src={src1} className="clip" id="Q"></audio>Q</button>
           <button className='drum-pad' id='heater2' value={src2} type="button" onClick={handleClick}><audio src={src2} className="clip" id="W"></audio>W</button>
           <button className="drum-pad" id='heater3' value={src3} type="button" onClick={handleClick}><audio src={src3} className="clip" id="E"></audio>E</button>
           <button className='drum-pad' id='heater4' value={src4} type="button" onClick={handleClick}><audio src={src4} className="clip" id="A"></audio>A</button>
           <button className='drum-pad' id='clap' value={src5} type="button"  onClick={handleClick}><audio src={src5} className="clip" id="S"></audio>S</button>
           <button className='drum-pad' id='open-HH' value={src6} type="button" onClick={handleClick}><audio src={src6} className="clip" id="D"></audio>D</button>
           <button className='drum-pad' id='kick-n-hat' value={src7} type="button" onClick={handleClick}><audio src={src7}className="clip" id="Z"></audio>Z</button>
           <button className='drum-pad' id='kick' value={src8} type="button" onClick={handleClick}><audio src={src8} className="clip" id="X"></audio>X</button>
           <button className='drum-pad' id='closed-HH' value={src9} type="button" onClick={handleClick}><audio src={src9} className="clip" id="C"></audio>C</button>
         </div> 
      </div> 
    </div>
  );
}

export default App;